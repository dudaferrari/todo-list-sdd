# Todo List SDD

Este repositório implementa uma aplicação de lista de tarefas com arquitetura MVC, monorepo, backend em Node.js + Express, frontend em React e armazenamento em memória.

## Checklist de requisitos

- [x] Arquitetura MVC
- [x] Monorepo
- [x] Armazenamento em memória
- [x] Spec-Driven Development
- [x] Constitution
- [x] Spec
- [x] Plan
- [x] Tasks
- [x] Documentação MkDocs
- [x] Código fonte completo
- [x] Configuração de deploy para frontend
- [x] Configuração de deploy para backend
- [x] Configuração de deploy para documentação

## Estrutura

- Frontend: React sob apps/frontend
- Backend: Express sob apps/backend
- Artefatos SDD: todo-list/specs/001-task-management
- Constituição: todo-list/.specify/memory/constitution.md
- Documentação: docs/ e mkdocs.yml

## Como executar localmente

- Instalar dependências: npm install
- Iniciar backend e frontend: npm run dev
- Executar testes: npm test
- Construir a documentação: mkdocs build --strict

## Deploy

- Frontend no Vercel: configurado via vercel.json
- Backend no Render: configurado via render.yaml
- Documentação no GitHub Pages: configurado via .github/workflows/deploy-docs.yml

Consulte DEPLOYMENT.md para o passo a passo completo.

## Artefatos principais

- Constituição: [todo-list/.specify/memory/constitution.md](todo-list/.specify/memory/constitution.md)
- Especificação: [todo-list/specs/001-task-management/spec.md](todo-list/specs/001-task-management/spec.md)
- Plano: [todo-list/specs/001-task-management/plan.md](todo-list/specs/001-task-management/plan.md)
- Tarefas: [todo-list/specs/001-task-management/tasks.md](todo-list/specs/001-task-management/tasks.md)
