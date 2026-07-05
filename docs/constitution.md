# Constitution

A constituição do projeto define as regras de desenvolvimento para garantir consistência, qualidade e alinhamento com o escopo do sistema.

## Princípios principais

- arquitetura MVC obrigatória;
- uso de React e Express com JavaScript;
- monorepo;
- dados em memória sem banco de dados;
- testes para controllers e API;
- interface simples, responsiva e fácil de usar;
- organização clara do código e manutenção da estrutura do repositório.

## Boas práticas de programação

As boas práticas também fazem parte da governança do projeto. Elas orientam o desenvolvimento para que o código permaneça simples, legível e sustentável.

- escrever funções pequenas e com responsabilidade bem definida;
- usar nomes claros e significativos;
- evitar duplicação de lógica;
- manter a separação entre camadas e módulos;
- preservar a arquitetura existente ao introduzir mudanças;
- revisar impacto em testes, manutenção e experiência do usuário;
- validar entradas e evitar comportamentos frágeis.

## Como o projeto atende essas normas

O projeto já foi implementado respeitando essas diretrizes, com:

- controllers, models, routes e services bem separados;
- frontend e backend organizados em módulos próprios;
- dados mantidos em memória durante a execução;
- testes automatizados cobrindo o comportamento principal da API;
- documentação pública e estrutura preparada para publicação.
