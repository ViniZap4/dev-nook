SUBMODULES = server web-client tui-client

# --- Development ---

.PHONY: dev
dev: ## Start dev stack
	docker compose up --build

.PHONY: prod
prod: ## Start production stack (with Caddy)
	docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d

.PHONY: down
down: ## Stop all containers
	docker compose down

# --- Git: Submodules ---

.PHONY: init
init: ## Clone and initialize all submodules
	git submodule update --init --recursive

.PHONY: pull
pull: ## Pull latest changes in all submodules and root
	git pull
	git submodule foreach 'git checkout $$(git config --get submodule.$$name.branch || echo main) && git pull'

.PHONY: status
status: ## Show git status for root and all submodules
	@echo "=== root ==="
	@git status --short
	@echo ""
	@git submodule foreach 'echo "=== $$name ==="; git status --short; echo ""'

.PHONY: diff
diff: ## Show diff for root and all submodules
	@echo "=== root ==="
	@git diff --stat
	@echo ""
	@git submodule foreach 'echo "=== $$name ==="; git diff --stat; echo ""'

# --- Git: Commit & Push ---

.PHONY: commit
commit: ## Commit all submodules then root (usage: make commit m="your message")
	@if [ -z "$(m)" ]; then echo "usage: make commit m=\"your message\""; exit 1; fi
	@for sub in $(SUBMODULES); do \
		echo "=== $$sub ==="; \
		cd $$sub; \
		if [ -n "$$(git status --porcelain)" ]; then \
			git add -A && git commit -m "$(m)"; \
		else \
			echo "nothing to commit"; \
		fi; \
		cd ..; \
		echo ""; \
	done
	@echo "=== root ==="
	@git add -A && git commit -m "update submodules: $(m)" || echo "nothing to commit"

.PHONY: push
push: ## Push all submodules then root
	@for sub in $(SUBMODULES); do \
		echo "=== pushing $$sub ==="; \
		cd $$sub && git push && cd ..; \
	done
	@echo "=== pushing root ==="
	@git push

.PHONY: ship
ship: ## Commit and push everything (usage: make ship m="your message")
	@if [ -z "$(m)" ]; then echo "usage: make ship m=\"your message\""; exit 1; fi
	$(MAKE) commit m="$(m)"
	$(MAKE) push

# --- Help ---

.PHONY: help
help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-12s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
