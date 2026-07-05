# MVC

A arquitetura MVC organiza o projeto em três camadas principais:

- Model: representa os dados e regras de negócio das tarefas.
- View: é a interface visual do usuário, implementada no frontend.
- Controller: recebe as requisições, processa a lógica e interage com o model.

Essa separação facilita a manutenção e a evolução da aplicação.

## Aplicação prática no projeto

No repositório, essa divisão está refletida em:

- models para a estrutura e manipulação das tarefas;
- controllers para tratar as operações da API;
- interfaces no frontend para apresentar os dados ao usuário;
- services para encapsular regras e comportamentos auxiliares, como o processamento de lembretes.
