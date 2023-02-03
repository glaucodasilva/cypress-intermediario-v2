# Testes automatizados, da ferramenta GitLab, com Cypress  

O objetivo deste projeto é realizar testes com Cypress utilizando uma versão open-source do GitLab, rodando em um container Docker em seu ambiente local.

## Funcionalidades da aplicação que serão testadas
O GitLab possui diversas funcionalidades, porém, duruante este projeto testaremos as listadas abaixo, tanto via API (Application Programming Interface), como via GUI (Graphical User Interface), além de testar uma delas (o git clone) via CLI (Command Line Interface).

    Login
    Logout
    Criação de projeto
    Criação de issue
    Adição de uma etiqueta (label) à uma issue
    Adição de um marco (milestone) à uma issue
    Git clone

## Pré-requisitos

Antes de começar, garanta que os seguintes requisitos sejam atendidos:

Computador com no mínimo 2 cores
e no mínimo 8 GB de memória RAM
Além disso, garanta que os seguintes sistemas estejam instalados em seu computador:

Durante os testes utilizei as seguintes versões:

    Docker (versão 20.10.22)
    git (versão 2.37.2.windows.2)
    Node.js (v18.12.1)
    npm (8.19.2)
    Visual Studio Code (1.75.0)
    Cypress (12.0.2)
    @faker-js/faker (7.6.0)
    cypress-plugin-api (2.6.1)
