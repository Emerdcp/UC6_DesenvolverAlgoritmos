# UC6_DesenvolverAlgoritmos

Grupo

Emerson
Karen
Lucas
Rebeca

# Tema do Trabalho:

Modelagem de Sistemas com UML: Diagramas de Caso de Uso - Grupo 02 - Simulação



## 📌 O que é Modelagem de Sistemas?

A modelagem de sistemas é o processo de representar graficamente como um sistema funciona ou deverá funcionar, antes de sua construção ou manutenção.

Ela serve para: 

Entender melhor o problema.

Comunicar ideias entre analistas, desenvolvedores e clientes.

Documentar o sistema de forma clara.

Para isso, é comum usar a UML.

## 📌 O que é UML?

UML (Unified Modeling Language) é uma linguagem padrão para modelagem visual de sistemas orientados a objetos.

Ela não é uma linguagem de programação, mas uma linguagem de representação que ajuda a criar diagramas.

👉 A UML possui vários diagramas, divididos em categorias:

Estruturais (ex.: classes, componentes, objetos)

Comportamentais (ex.: casos de uso, atividades, sequência)

Um dos mais usados no início do desenvolvimento é o Diagrama de Caso de Uso.

## 📌 O que é um Diagrama de Caso de Uso?

O Diagrama de Caso de Uso é um diagrama da UML usado para representar as funcionalidades do sistema (o que ele deve fazer) do ponto de vista do usuário.

Ou seja: mostra quem usa o sistema (atores) e o que eles podem fazer (casos de uso).

Ele não mostra como o sistema faz, mas apenas o que deve oferecer.

## 📌 Elementos principais

- Ator 👤
Representa uma pessoa, sistema externo ou entidade que interage com o sistema.
Ex.: “Cliente”, “Administrador”, “Sistema de Pagamento”.

- Caso de Uso ⚡
Representa uma funcionalidade ou serviço oferecido pelo sistema.
É desenhado como uma elipse.
Ex.: “Realizar Login”, “Cadastrar Produto”, “Emitir Relatório”.

- Associação ➡️
Linha que conecta um ator a um caso de uso, mostrando que ele pode executar aquela função.

- Sistema 🖥️
Representado por um retângulo que engloba os casos de uso.

Mostra a “fronteira” do sistema.

## 📌 Relacionamentos entre Casos de Uso

Além do básico ator ↔ caso de uso, existem relações importantes:

<include> (inclusão) Um caso de uso sempre usa outro.

Ex.: “Finalizar Compra” inclui “Calcular Frete”.

<extend> (extensão) Um caso de uso pode ser estendido opcionalmente.

Ex.: “Realizar Login” pode ter extensão “Recuperar Senha”.

Generalização (herança) Um ator ou caso de uso herda características de outro.
Ex.: “Usuário Administrador” é uma especialização de “Usuário”.

## 📌 Exemplo simples

Imagine um sistema de e-commerce:

Atores:

Cliente

Administrador

Casos de Uso:

Cliente pode: "Cadastrar-se", "Realizar Login", "Comprar Produto".

Administrador pode: "Cadastrar Produto", "Gerar Relatório".

👉 O diagrama mostraria:

Cliente ligado a "Cadastrar-se", "Login", "Comprar".

Administrador ligado a "Cadastrar Produto" e "Gerar Relatório".


## 📌 Como montar um trabalho/apresentação

Você pode estruturar sua apresentação assim:

1. Introdução

O que é modelagem de sistemas.

O que é UML.

Importância para análise e comunicação.

2. Diagrama de Caso de Uso

Definição.

Objetivo: mostrar funcionalidades do ponto de vista do usuário.

Elementos principais (atores, casos de uso, associações, sistema).

3. Tipos de Relacionamentos

Include, Extend, Generalização (com exemplos visuais).

4. Exemplos práticos

Crie um diagrama de caso de uso real (pode ser de e-commerce, biblioteca, sistema bancário, aplicativo de delivery etc.).

5. Conclusão

Destacar que diagramas de caso de uso são essenciais na fase inicial do projeto, pois ajudam a alinhar requisitos entre cliente e equipe técnica.

## 📌 Modelo de Simulação para apresentação

Se você quiser simular em sala, pode:

Mostrar um diagrama pronto (feito no Lucidchart, Draw.io, StarUML etc.).

Explicar cada ator e caso de uso.

Simular como o usuário usaria o sistema.
(Ex.: “O cliente entra, faz login, escolhe o produto e finaliza a compra. Esse caminho é mostrado no caso de uso X, Y e Z”).