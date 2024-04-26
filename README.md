# Requisitos

- [Node.js](http://nodejs.org/en/dowload)
- [PostgreSQL](https://www.postgresql.org/dowload/)

## Clonando o Projeto

Executar no terminal:
```bash
    git clone <github template url> <project_name>
```

## Instalando Dependências

Instalar as dependências de desenvolvimento e produção.

entre na pasta principal do projeto e rode o comando:

```
 npm install
```

## Variáveis de ambiente
Duplicar o arquivo `.env.example` e renomear a cópia para `.env`, sobrescrevendo os valores das variáveis de ambiente do arquivo `.env` com as suas credenciais.

O projeto utiliza as seguintes variáveis: 

| Var Name     | Description                             | Required
| --------     | -----------                             |---------
| DATABASE_URL | Credenciais do banco de dados utilizado | obrigatório
| SECRET_KEY | Chave secreta utilizada pela autenticação JWT | obrigatório
| SECRET_KEY | Tempo de expiração do token JWT (1ms, 1m, 1h, 1d...) | opcional

## Executando as Migrações

Execute a baixo na raiz do projeto:

```
npx prisma migrate dev
```

## Iniciando o servidor
O servidor da API será executado, por padrão, na porta 3000:

```
npm run dev
```

Navegue até `http://localhost:3000` para acessar a API.

# Rotas

- Acesse a documentação das rotas em http://localhost:3000/docs.

- Baixe a documentação Swagger utilizando a rota http://localhost:3000/docs/json

