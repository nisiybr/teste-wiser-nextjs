# Instalação (pt-br)
1. Realize o download ou "git clone" do repositório.
```bash
git clone https://github.com/nisiybr/teste-wiser-nextjs.git teste_clone
```
2. Abra um programa que execute linha de comando, entre no diretório baixado e então rode o comando para instalar as dependências:
```bash
yarn
```
3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# or
yarn dev
```
4. Abra[http://localhost:3000](http://localhost:3000) com seu navegador para visualizar a aplicação.
5. Realizando o build:
```bash
yarn build
```
6. Inicializando a aplicação em Produção:
```bash
yarn start
```
# Funcionalidades fora do escopo (pt-br)
- Página de Esqueci minha Senha
- Página de Cadastro de Usuário
- Senha/Token criptografados com JWT, ou alguma outra biblioteca

# Funcionalidades (pt-br)
Link da Aplicação em Produção: [https://vercel.com/guilhermenisiyama/teste-wiser-nextjs](https://vercel.com/guilhermenisiyama/teste-wiser-nextjs)
Exemplo de Usuário válido:
- user: teste@teste.com
- senha: 123456

1. Ao realizar um login com sucesso é apresentado um alerta verde e o usuário é direcionado para a rota '/dashboard'
2. Ao informar um email e senha que não existam no mockApi (todos os users estão listados abaixo), e clicar no botão entrar, é apresentado um popup vermelho e o usuário não é direcionado a outra rota.
3. Ao informar um e-mail inválido, um erro será apresentado quando clicar no botão Entrar.
4. Ao não informar algum dos campos, um erro será apresentado quando clicar no botão Entrar.
5. Na rota Dashboard, temos uma funcionalidade de Logout, ao clicar, será apresentado um alerta em amarelo e o usuário é direcionado à página de Login.
6. Se o usuário estiver logado e acessar a página de Login, ele é automaticamente direcionado para a rota de área logada ('/dashboard').
7. Se o usuário não estivar logado e acessar a página de área logada, ele é automaticamente direcionado para a pagina de Login.


## Dados no Mock da API - Informações para Login

API endpoint
https://6031e552081a01001754740e.mockapi.io/api/v1/:endpoint

Por exemplo:
https://6031e552081a01001754740e.mockapi.io/api/v1/users/1
https://6031e552081a01001754740e.mockapi.io/api/v1/users/

```json
[
  {
    "id": "1",
    "name": "Sven Wiegand",
    "email": "Daisy_Donnelly@yahoo.com",
    "password": "123456"
  },
  {
    "id": "2",
    "name": "Dawn Schneider",
    "email": "Alford_Kautzer98@hotmail.com",
    "password": "123456"
  },
  {
    "id": "3",
    "name": "Mrs. Lesley Nader",
    "email": "Bernardo96@gmail.com",
    "password": "123456"
  },
  {
    "id": "4",
    "name": "Price Kuhn",
    "email": "Charles_Schuster37@yahoo.com",
    "password": "123456"
  },
  {
    "id": "5",
    "name": "Chet Abernathy",
    "email": "Myrna62@hotmail.com",
    "password": "123456"
  },
  {
    "id": "6",
    "name": "Samson Halvorson Sr.",
    "email": "Beulah_Mohr@yahoo.com",
    "password": "123456"
  },
  {
    "id": "7",
    "name": "Caden Padberg",
    "email": "Boyd41@yahoo.com",
    "password": "123456"
  },
  {
    "id": "8",
    "name": "Mr. Mike Raynor",
    "email": "Orrin_Hahn90@gmail.com",
    "password": "123456"
  },
  {
    "id": "9",
    "name": "Grant Thompson",
    "email": "Jayda.Hintz@gmail.com",
    "password": "123456"
  },
  {
    "id": "10",
    "name": "Henry Schowalter",
    "email": "Lawson.Crist@yahoo.com",
    "password": "123456"
  },
  {
    "id": "11",
    "name": "Teste Fácil",
    "email": "teste@teste.com",
    "password": "123456"
  }
]
```

