# Prática Orientada 01  
Arquitetura de Sistemas  
IFCE - Campus Boa Viagem  

## Tema
Engenharia Reversa e Análise de Design de Software

---

## Parte 1 – Compreensão do Sistema

O sistema tem como objetivo gerenciar pedidos de uma pastelaria, permitindo ao usuário selecionar produtos, informar a quantidade e visualizar o total da compra.

As principais funcionalidades do sistema são:
- Adicionar produtos ao pedido
- Listar os itens adicionados
- Calcular o valor total
- Aplicar desconto e taxa ao finalizar o pedido
- Armazenar informações no navegador utilizando localStorage

A interação do usuário ocorre por meio de:
- Um seletor de produtos
- Um campo de entrada para quantidade
- Botões para adicionar itens e finalizar o pedido
- Visualização dinâmica da lista de itens e do total

---

## Parte 2 – Identificação de Elementos

### Funções principais
- adicionar(): adiciona um item ao pedido
- atualizarLista(): atualiza a interface e recalcula o total
- salvarTotal(): salva o total no localStorage
- finalizar(): calcula o total final com desconto e taxa
- limparTudo(): reseta o sistema
- removerUltimo(): remove o último item adicionado
- calcularTotal(): calcula o total dos itens (função duplicada)

### Dados manipulados
- itens: array de objetos representando os itens do pedido
- total: valor numérico do total da compra

Cada item possui:
- produto
- quantidade
- subtotal

### Entidades identificadas
Mesmo sem uso de orientação a objetos, é possível identificar:
- Produto
- ItemPedido
- Pedido

---

## Parte 3 – Arquitetura

O sistema não possui uma arquitetura bem definida.

Justificativa:
- Toda a lógica está concentrada em um único arquivo JavaScript
- Não há separação entre interface, lógica de negócio e dados
- O HTML está diretamente acoplado às funções JavaScript por meio de eventos inline

### Padrão arquitetural
O sistema não segue padrões como MVC ou arquitetura em camadas.

### Classificação
O sistema pode ser classificado como:
- Pequeno porte
- Monolítico
- Estrutura procedural

---

## Parte 4 – Modelagem (Diagrama de Classes)

Classes identificadas:

### Produto
Atributos:
- nome
- preco

### ItemPedido
Atributos:
- produto
- quantidade
- subtotal

### Pedido
Atributos:
- lista de itens
- total

Métodos:
- adicionarItem()
- calcularTotal()
- finalizarPedido()

Relacionamentos:
- Um Pedido possui vários ItemPedido
- Um ItemPedido possui um Produto

---

## Parte 5 – Análise de Problemas

### Coesão
As funções apresentam baixa coesão, pois executam múltiplas responsabilidades.  
Exemplo: atualizarLista() manipula o DOM, calcula o total e salva dados.

### Acoplamento
O sistema possui alto acoplamento, com dependência direta do DOM dentro das funções.

### Separação de responsabilidades
Não há separação clara entre:
- Interface
- Lógica de negócio
- Persistência de dados

### Duplicação de código
Existe duplicação na lógica de cálculo do total:
- A função calcularTotal() não é utilizada corretamente
- O cálculo também é realizado dentro de atualizarLista()

### Organização geral
- Código concentrado em um único arquivo
- Ausência de modularização
- Baixa legibilidade e manutenção dificultada

---

## Parte 6 – Propostas de Melhoria

### Organização em camadas
Separar o sistema em:
- Interface (HTML)
- Lógica de negócio (JavaScript)
- Manipulação de dados

### Criação de classes
Implementar classes para melhor estruturação:
- Produto
- ItemPedido
- Pedido

### Melhoria das funções
- Criar funções menores e mais específicas
- Separar lógica de cálculo da manipulação do DOM

### Redução de acoplamento
- Evitar acesso direto ao DOM dentro da lógica de negócio
- Utilizar parâmetros para troca de dados entre funções

### Eliminação de duplicação
- Centralizar o cálculo do total em uma única função

### Organização do código
- Separar o código em múltiplos arquivos
- Melhorar nomes de funções e variáveis
- Estruturar o sistema de forma mais modular

### Preparação para padrões de projeto
- Factory: para criação de objetos como produtos ou itens
- Singleton: para controle centralizado do pedido

---