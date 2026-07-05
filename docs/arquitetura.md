# Arquitetura

A aplicação utiliza uma estrutura baseada em separação de responsabilidades para facilitar manutenção e evolução.

## Visão geral

- Frontend: interface em React para interação com o usuário.
- Backend: API em Express para operações de tarefas.
- Dados: armazenamento em memória, sem banco de dados.

## Como a arquitetura é organizada

A solução foi pensada para respeitar as boas práticas definidas na constituição:

- o frontend fica voltado à apresentação e interação;
- o backend concentra a lógica de aplicação e os endpoints da API;
- os dados são manipulados por modelos e serviços específicos;
- a comunicação entre as camadas ocorre de forma clara e previsível.

Essa organização reduz o acoplamento e torna a aplicação mais simples de evoluir.
