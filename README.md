# Testes automatizados, da ferramenta GitLab, com Cypress  

O objetivo deste projeto é realizar testes com Cypress utilizando uma versão open-source do GitLab, rodando em um container Docker em seu ambiente local. 

Obs: Testes realizados no escopo das aulas do curso Intermediário Cypress - https://github.com/wlsf82/cypress-intermediario-v2

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

# _Setup_ do ambiente local com Docker

Com o docker rodando em seu computador, execute o comando `docker run --publish 80:80 --publish 22:22 --hostname localhost wlsf82/gitlab-ce` e aguarde até o ambiente inicializar.

> 🕐 Isso por levar alguns minutos.
>
> ☕ Portanto, recomendo pegar um café (ou um chá) enquanto aguarda.

Depois de alguns minutos, acesse a URL http://localhost para definir a senha do usuário `root`.

## Definindo a senha do usuário `root`

Ao acessar a URL http://localhost, você deve ver uma página para trocar a senha do usuário `root`, conforme abaixo:

![GitLab reset password page](./assets/please-create-a-password-for-your-new-account.png)

Digite uma senha, confirme a mesma e clique no botão _Change your password_.

> A senha definida aqui será usada na aula 1, portanto, use uma senha que irá se lembrar (ou tome nota).

## Criando um Access Token

1. Faça login com o usuário `root` com a senha definida na seção anterior
2. Clique no avatar do usuário no canto superior direito da tela; clique no link _Settings_, e então; clique na opção _Access Tokens_ (no menu lateral esquerdo)
3. No campo nome, digite o valor `cypress-intermediario-v2`; na seção _Scopes_ marque a opção **api**; e então, clique no botão _Create personal access token_.

> Uma mensagem de que o _token_ foi criado com sucesso deve ser exibida, além do _token_ propriamente dito. **Copie o _token_ clicando no botão à direita do campo e guarde-o para utilizar na aula 1**.

## Adicionando uma chave SSH

1. No terminal de linha de comando, digite o seguinte comando e pressione ENTER `ssh-keygen -t ed25519 -C "root@example.com"`
2. Será solicitado um caminho para salvar a chave. Pressione ENTER para aceitar o caminho padrão
3. Será solicitada uma senha. Pressione ENTER para que a senha não seja necessária
4. Será solicitado que repita a senha. Pressione ENTER novamente para que a senha não seja necessária
5. De novo no terminal de linha de comando, digite o seguinte comando e pressione ENTER para copiar a chave pública recém criada para a área de transferência `pbcopy < ~/.ssh/id_ed25519.pub`
6. Logado na aplicação com o usuário `root`, clique no avatar do usuário no canto superior direito da tela; clique no link _Settings_; e então, clique na opção _SSH Keys_ (no menu lateral esquerdo)
7. Cole sua chave SSH pública no campo key. O campo _Title_ deve ser automaticamente preenchido
8. Por fim, clique no botão _Add key_.

> Você também encontrará instruções sobre como gerar a chave SSH em sistema operacional Windows na própria aplicação em teste (rodando em seu ambiente local com Docker) a partir da seguinte URL http://localhost/help/ssh/README#generating-a-new-ssh-key-pair (**instruções em Inglês**).

___

Ok, o ambiente local está pronto!
