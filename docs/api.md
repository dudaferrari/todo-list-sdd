# API

A API é responsável por expor endpoints para criar, listar e excluir tarefas.

## Endpoints principais

- GET /tasks: lista todas as tarefas.
- POST /tasks: cria uma nova tarefa.
- DELETE /tasks/:id: remove uma tarefa.

A comunicação ocorre em JSON e os dados são mantidos em memória durante a execução da aplicação.
