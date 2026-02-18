## POS + ERP Unified Platform (Monorepo)

This repository follows the provided specification for a unified POS + ERP platform with AI.

- **Frontend**: Next.js 14 (App Router, TypeScript, Tailwind, shadcn/ui)
- **Backend**: NestJS (REST + GraphQL), PostgreSQL via Prisma
- **AI Service**: Python + FastAPI
- **Monorepo Tooling**: Turborepo, pnpm

### Structure

- `apps/web` – main web/admin / POS interface
- `packages/api` – NestJS API server
- `packages/ai-service` – FastAPI AI microservice
- `packages/shared` – shared types and utilities
- `infrastructure` – Docker, Kubernetes, IaC (to be filled)

Use `pnpm install` in this folder, then:

- `pnpm dev` – run dev tasks via Turborepo
- `pnpm build` – build all apps and packages


