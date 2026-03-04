# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

Dev Nook is a developer platform (git hosting, shortcuts, dashboard) structured as a monorepo with git submodules:

| Component | Path | Repo | Tech |
|-----------|------|------|------|
| **Server** | `server/` | `ViniZap4/devnook-server` | Go 1.24, chi, pgx, JWT, WebSocket |
| **Web Client** | `web-client/` | `ViniZap4/devnook-web` | Svelte 5, SvelteKit, Tailwind v4, TypeScript |
| **TUI Client** | `tui-client/` | `ViniZap4/devnook-tui` | Go 1.24, Bubble Tea, Lip Gloss |

Infrastructure: PostgreSQL 16, Docker Compose, Caddy (reverse proxy + auto TLS).

## Commands

```bash
# Full stack (dev)
docker compose up --build

# Production (with Caddy reverse proxy + auto HTTPS)
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# Web client dev
cd web-client && npm run dev

# Server dev (requires running PostgreSQL)
cd server && go run .

# TUI client
cd tui-client && go run .
```

No test runner or linter is configured.

## Submodules

After cloning, initialize submodules:
```bash
git submodule update --init --recursive
```

Each submodule has its own CLAUDE.md, go.mod/package.json, and Dockerfile.

## Server (Go)

- **Router:** chi v5 with CORS, logging, recovery middleware
- **Database:** PostgreSQL via pgx/v5 connection pool, auto-migration in `internal/database/db.go`
- **Auth:** JWT (HS256) with bcrypt passwords — `internal/auth/auth.go`
- **Handlers:** `internal/handler/` — auth, repos, shortcuts, git protocol
- **Git:** Smart HTTP protocol (info/refs, upload-pack, receive-pack) — shells out to `git` CLI
- **WebSocket:** Hub pattern in `internal/ws/hub.go` for real-time events
- **Config:** Env vars loaded via godotenv — `internal/config/config.go`

### API Endpoints

```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
GET    /api/v1/health
GET    /api/v1/users/me
GET    /api/v1/repos
POST   /api/v1/repos
GET    /api/v1/repos/:owner/:name
DELETE /api/v1/repos/:owner/:name
GET    /api/v1/shortcuts
POST   /api/v1/shortcuts
PUT    /api/v1/shortcuts/:id
DELETE /api/v1/shortcuts/:id
GET    /:owner/:repo.git/info/refs
POST   /:owner/:repo.git/git-upload-pack
POST   /:owner/:repo.git/git-receive-pack
GET    /ws
```

## Web Client (Svelte 5)

- **Framework:** SvelteKit with adapter-auto, SSR enabled
- **State:** Svelte 5 runes (`$state`, `$derived`, `$effect`), persisted to localStorage
- **Styling:** Tailwind CSS v4, CSS custom properties for theming
- **Stores:** `theme.svelte.ts` (dark/light + palettes), `shortcuts.svelte.ts`, `persisted.svelte.ts`
- **Components:** Modal, Navbar, ShortCutsBox, AppearanceSection, etc.
- **Routes:** `/` (login), `/dashboard` (auth-guarded)

## TUI Client (Bubble Tea)

- **Framework:** Bubble Tea with Lip Gloss styling
- **Views:** Login (textinput), Dashboard (tabs: overview/repos/shortcuts)
- **API Client:** HTTP client in `internal/api/client.go`
- **Config:** `~/.config/devnook/config.json` (server URL + token)

## Deployment

### Single server / VPS
```bash
cp .env.example .env
# Edit .env: set DOMAIN, DEVNOOK_SECRET, DB_PASSWORD
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```
Caddy auto-provisions Let's Encrypt TLS.

### Behind Cloudflare
1. DNS → server IP (Cloudflare proxy ON / orange cloud)
2. Cloudflare SSL → Full (strict)
3. Same docker compose command — Caddy handles origin TLS, Cloudflare handles CDN + DDoS

## Environment Variables

Root `.env` (used by docker-compose):
- `DB_USER`, `DB_PASSWORD`, `DB_PORT` — PostgreSQL
- `SERVER_PORT`, `DEVNOOK_SECRET`, `DEVNOOK_REPOS_PATH` — Server
- `WEB_PORT`, `DEVNOOK_SERVER_URL` — Web client
- `DOMAIN` — Production domain (for Caddyfile)
