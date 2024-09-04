# Gen Coffee - Digital Menu System

Gen Coffee é um sistema de menu digital para cafeterias, desenvolvido com Angular 18 no frontend e NestJS no backend. O projeto fornece uma interface moderna para visualizar e gerenciar um cardápio de cafeteria, com funcionalidades administrativas para gerenciar produtos e categorias.

## Índice

- [Visão Geral do Projeto](visão-geral-do-projeto)
- [Recursos](#recursos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral do Projeto

Devido limitações de tempo, tanto o backend como o frontend se limitaram apenas a visualização de produtos. Eu havia projetado a aplicação para ter cadastro de usuários (visitante/administrador), cadastro e visualização de pedidos e painel de gerenciamento de usuários e pedidos. Todos esses features foram retirados do escopo do MVP para que sejam desenvolvidos posteriormente.

- Infraestrutura possui Docker como solução para conteinerização
- O Backend foi desenvolvido com Nest, Prisma e JWT.
- O Frontend foi desenvolvido usando Angular, FontAwesome e JWT.

De maneira geral, o projeto foi bastante desafiador por algumas decisões que não terminaram sendo tao interessantes para mim, como a utilização de Monorepo NX e outras soluções que eu fiz questão de inserir como Docker. Tanto o Monorepo, como o Docker e até mesmo o Nest + Prisma foram meus primeiros contatos com tais tecnologias, apesar de eu já saber da existência delas e como elas funcionam.

## Recursos

- Visualização de produtos e categorias do cardápio
- Funcionalidade de pesquisa de produtos
- Layout moderno e responsivo

## Instalação

Para instalar e executar o projeto, siga os passos abaixo:

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (ou [yarn](https://yarnpkg.com/))

### Passos de Instalação

1. **Clone o Repositório**

    ```bash
    git clone https://github.com/roberto-juniorjp/gen-coffee.git
    cd gen-coffee
    ```

2. **Rode os Scripts do Docker**

    Navegue até o diretório do Docker e rode o script:

    ```bash
    cd docker
    ./generate_docker.sh
    ```

3. **Instale as Dependências do Frontend**

    Navegue até o diretório do frontend e instale as dependências:

    ```bash
    cd ../apps/frontend
    npm install
    ```

4. **Configure o Banco de Dados**

    Instale o banco de dados PostgreSQL
    Atualize o arquivo de configuração do Prisma com as seguintes credenciais:
    ```
    POSTGRES_DB: coffee
    POSTGRES_USER: robertojunior
    POSTGRES_PASSWORD: mytechnicaltest
    ```

5. **Execute as Migrations do Prisma**

    ```bash
    cd ../..
    npx prisma migrate deploy
    ```

6. **Inicie Todos os Serviços**

    ```bash
    ./app_serve.sh
    ```

## Uso

- Acesse a aplicação frontend em [http://localhost:4200](http://localhost:4200).
- Acesse o backend em [http://localhost:3000/api/docs](http://localhost:3000/api/docs) para interações com a API.
- Utilize a chave de autenticação se necessário:
```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MjU0NTgyMjMsImV4cCI6MTc1Njk5NDIyMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.ylve7-AXHN5GXG5KkWSpJkw0V0JdwELS3TFGAEVDfkE
```
- OBS: Esta chave foi gerada utilizando o segredo my-technical-test-secret através da criptografia HS256 e se encontra no front através do JWT. Você só precisará utilizá-la adicionalmente caso queira manipular o Swagger.

### Funcionalidades

- **Pesquisa de Produtos**: Utilize a barra de busca para filtrar produtos no cardápio.

## Estrutura do Projeto

### Diretórios e Arquivos

- **`apps/backend`**: Contém o código do backend, desenvolvido com NestJS.

- **`apps/frontend`**: Contém o código do frontend, desenvolvido com Angular 18.

## Contribuição

Contribuições são bem-vindas! Por favor, siga as diretrizes de contribuição abaixo:

1. Fork o repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/MinhaNovaFeature`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/MinhaNovaFeature`).
5. Abra um Pull Request.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).

---

Para mais informações, consulte a documentação adicional ou entre em contato com o desenvolvedor principal.
