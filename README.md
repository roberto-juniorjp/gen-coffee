# Gen Coffee - Digital Menu System

Gen Coffee é um sistema de menu digital para cafeterias, desenvolvido com Angular 18 no frontend e NestJS no backend. O projeto fornece uma interface moderna para visualizar e gerenciar um cardápio de cafeteria, com funcionalidades administrativas para gerenciar produtos e categorias.

## Índice

- [Recursos](#recursos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Recursos

- Visualização de produtos e categorias do cardápio
- Funcionalidade de pesquisa de produtos
- Interface administrativa para gerenciar produtos e categorias
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

2. **Instale as Dependências do Backend**

    Navegue até o diretório do backend e instale as dependências:

    ```bash
    cd apps/backend
    npm install
    ```

3. **Instale as Dependências do Frontend**

    Navegue até o diretório do frontend e instale as dependências:

    ```bash
    cd ../frontend
    npm install
    ```

4. **Configure o Banco de Dados**

    Configure o banco de dados PostgreSQL e atualize o arquivo de configuração do Prisma com suas credenciais.

5. **Execute as Migrations do Prisma**

    ```bash
    npx prisma migrate deploy
    ```

6. **Inicie o Backend**

    ```bash
    cd ../backend
    npm run start:dev
    ```

7. **Inicie o Frontend**

    ```bash
    cd ../frontend
    npm start
    ```

## Configuração

### Configuração do Backend

- **Arquivo `.env`**: Configure as variáveis de ambiente no arquivo `.env` para o backend.

### Configuração do Frontend

- **Arquivo `src/environments/environment.ts`**: Atualize o ambiente com a URL base da API.

## Uso

- Acesse a aplicação frontend em [http://localhost:4200](http://localhost:4200).
- Acesse o backend em [http://localhost:3000/api](http://localhost:3000/api) para interações com a API.

### Funcionalidades

- **Pesquisa de Produtos**: Utilize a barra de busca para filtrar produtos no cardápio.
- **Visualização de Produtos e Categorias**: Navegue pelos produtos e categorias no frontend.
- **Administração de Produtos**: Acesse o painel administrativo para gerenciar produtos e categorias.

## Estrutura do Projeto

### Diretórios e Arquivos

- **`apps/backend`**: Contém o código do backend, desenvolvido com NestJS.
  - **`src`**: Código fonte do backend.
  - **`prisma`**: Arquivos de configuração do Prisma.
  - **`package.json`**: Dependências e scripts do backend.

- **`apps/frontend`**: Contém o código do frontend, desenvolvido com Angular 18.
  - **`src`**: Código fonte do frontend.
  - **`angular.json`**: Configuração do Angular.
  - **`package.json`**: Dependências e scripts do frontend.

- **`libs`**: Biblioteca compartilhada entre o frontend e o backend.

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
