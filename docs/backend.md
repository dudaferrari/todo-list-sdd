# Backend

O backend é implementado com Express e segue a estrutura MVC.

Ele é responsável por:

- receber requisições da interface;
- validar os dados de entrada;
- manipular a coleção de tarefas em memória;
- responder com os resultados em formato JSON;
- manter a lógica de negócio separada dos roteamentos e da interface.

## Boas práticas aplicadas

- controllers com responsabilidade de fluxo de requisições;
- models para representação e manipulação dos dados;
- services para encapsular regras específicas, como a criação de lembretes;
- rotas simples e bem organizadas;
- testes de controller e de integração para validar o comportamento esperado.
