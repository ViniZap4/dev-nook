# Dev Nook

Developer platform — git hosting, shortcuts, dashboard. Monorepo with Go server, Svelte web client, and Bubble Tea TUI.

## Quick Start

```bash
# Clone with submodules
git clone --recurse-submodules git@github.com:ViniZap4/devnook.git
cd devnook

# Copy env and start
cp .env.example .env
docker compose up --build
```

- **Web client:** http://localhost:3000
- **API server:** http://localhost:8080
- **Health check:** http://localhost:8080/api/v1/health

## TUI Client

```bash
cd tui-client
go run .
```

## Deploy to VPS / Single Server

```bash
# Set your domain
echo "DOMAIN=devnook.example.com" >> .env

# Start with Caddy reverse proxy (auto HTTPS via Let's Encrypt)
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## Deploy with Cloudflare

1. Point your domain's DNS to your server IP (Cloudflare proxy ON / orange cloud)
2. Set Cloudflare SSL mode to **Full (strict)**
3. Deploy the same way as VPS above — Caddy handles origin TLS, Cloudflare handles CDN + DDoS

## Structure

```
devnook/
├── server/        → git submodule (Go API + git protocol)
├── web-client/    → git submodule (Svelte 5 + SvelteKit)
├── tui-client/    → git submodule (Bubble Tea TUI)
├── docker-compose.yml        → dev stack (db + server + web)
├── docker-compose.prod.yml   → production overlay (+ Caddy)
└── Caddyfile                 → reverse proxy config
```
