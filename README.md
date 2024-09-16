# To Do List

## Descrição

Este projeto é uma aplicação web de gerenciamento de tarefas, onde os usuários podem criar, editar, visualizar e deletar tarefas. Cada usuário tem controle total sobre suas próprias tarefas, e elas podem ser visualizadas por outros membros.

## Funcionalidades

- **Cadastro de Tarefas**: Os usuários podem criar tarefas com nome, descrição, prioridade e status de conclusão.
- **Edição de Tarefas**: É possível editar os detalhes das tarefas, exceto a data de término para tarefas concluídas.
- **Listagem de Tarefas**: Exibe todas as tarefas cadastradas, permitindo que o usuário edite ou delete as suas próprias tarefas.
- **Cadastro de Membros**: Funcionalidade para cadastro de novos membros, com validação de email e nome.
- **Validações de Campos**: Todos os campos possuem validações para garantir a integridade dos dados.
- **Autenticação de Membros**: Apenas membros autenticados podem acessar a aplicação.
- **Exclusão de Membro**: Quando um membro é deletado, todas as suas tarefas também são removidas.
- **Restrições de Edição e Deleção**: Apenas o dono da tarefa pode editá-la ou deletá-la.

## Tecnologias Utilizadas

- **Back-end**: JavaScript + Node.js
- **Banco de Dados**: postgresql

### Pacotes e Versões

- **bcrypt**
- **dotenv**
- **express**
- **joi**
- **jsonwebtoken**
- **nodemon**
- **pg**
- **sequelize**

## Estrutura de Pastas
- /controladores: Manipulação de usuários e tarefas.
- /intermediarios: Autenticação e validação de requisições.
- /validacoes: validação de dados.
- /conexao.js: Conexão com o banco de dados utilizando Sequelize.
- /rotas.js: Mapeia as rotas e vincula os controladores às URLs.
- /senhajwt.js: Geração e verificação.

## Instalação
#### Clone o repositório

#### Instale as dependências:
- npm i
  
#### Crie um arquivo .env na raiz do projeto com as variáveis de ambiente:
- Ex: JWT_SECRET=sua_chave_secreta
  
#### Inicie o servidor:
- npm start

## Autor
- Humberto Campos
