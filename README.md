# Instalação e Execução do Projeto


# Configuração do Banco de Dados

## 1. Executar o script SQL

Abra o MySQL Workbench ou outro cliente MySQL e execute o script `banco_exodia.sql`.

O script irá criar:

* Banco de dados `banco_exodia`
* Tabelas do sistema
* Relacionamentos
* Views
* Consultas de teste

---

## 2. Criação do usuário da aplicação

Após a criação do banco, execute os comandos abaixo:

```sql
CREATE USER 'app_yugioh'@'%' IDENTIFIED BY 'YuGiOh2026';

GRANT SELECT ON banco_exodia.view_monstro TO 'app_yugioh'@'%';
GRANT SELECT ON banco_exodia.view_armadilha TO 'app_yugioh'@'%';
GRANT SELECT ON banco_exodia.view_feitico TO 'app_yugioh'@'%';
GRANT SELECT ON banco_exodia.view_colecao_cartas TO 'app_yugioh'@'%';

GRANT SELECT, INSERT, UPDATE, DELETE ON banco_exodia.Cartas TO 'app_yugioh'@'%';
GRANT SELECT, INSERT, UPDATE, DELETE ON banco_exodia.Monstros TO 'app_yugioh'@'%';
GRANT SELECT, INSERT, UPDATE, DELETE ON banco_exodia.Armadilhas TO 'app_yugioh'@'%';
GRANT SELECT, INSERT, UPDATE, DELETE ON banco_exodia.Feiticos TO 'app_yugioh'@'%';
GRANT SELECT, INSERT, UPDATE, DELETE ON banco_exodia.Colecoes TO 'app_yugioh'@'%';
GRANT SELECT, INSERT, UPDATE, DELETE ON banco_exodia.CartasColecoes TO 'app_yugioh'@'%';

FLUSH PRIVILEGES;
```

### Descrição

Foi criado um usuário específico para a aplicação chamado **app_yugioh**.

Esse usuário possui permissões para:

* Consultar as views do sistema.
* Inserir registros.
* Atualizar registros.
* Excluir registros.
* Consultar dados das tabelas.

A utilização de um usuário próprio aumenta a segurança da aplicação, evitando o uso da conta administrativa (root) durante a execução do sistema.

---

## 3. Configurar o arquivo .env

Crie um arquivo chamado `.env` na raiz do projeto.

Exemplo:

```env
DB_HOST=localhost
DB_USER=app_yugioh
DB_PASSWORD=YuGiOh2026
DB_NAME=banco_exodia
PORT=3000
```

---

# Instalação das Dependências

No terminal, execute:

```bash
npm install
```

O comando instalará todas as dependências necessárias para o funcionamento da aplicação.

---

# Execução do Backend

Para iniciar o servidor:


nodemon
```

ou


npm start
```

Resultado esperado:

```txt
Conectado ao banco de dados com sucesso.
XXXX cartas carregadas do banco.
Servidor rodando em http://localhost:3000
```

---

# Testando a API

## Listar todas as cartas

Abra o navegador:

```txt
http://localhost:3000/cartas
```

Resultado esperado:

Retorno de todas as cartas cadastradas.

---

## Buscar carta por ID

Exemplo:

```txt
http://localhost:3000/cartas/2095764
```

Resultado esperado:

Retorno dos dados da carta correspondente ao ID informado.

---

## Pesquisar cartas por critério

Exemplo:

```txt
http://localhost:3000/cartas/pesquisar/Wyrm
```

Resultado esperado:

Retorno das cartas que possuem o critério informado.

---

## Pesquisar cartas por coleção

Exemplo:

```txt
http://localhost:3000/cartas/colecao/Secret%20Rare
```

Resultado esperado:

Retorno das cartas pertencentes à coleção pesquisada.

---

## Criar uma carta

Exemplo:

```txt
http://localhost:3000/cartas/criar/999999/CartaTeste/monster
```

Resultado esperado:

Criação da carta e retorno dos dados cadastrados.

---

## Atualizar uma carta

Exemplo:

```txt
http://localhost:3000/cartas/atualizar/999999/CartaAtualizada/monster
```

Resultado esperado:

Atualização da carta cadastrada.

---

## Remover uma carta

Utilizando Postman ou Insomnia:

```http
DELETE http://localhost:3000/cartas/999999
```

Resultado esperado:

Status HTTP 204 e remoção da carta.

---
## TESTE DAS REQUISIÇÕES DO FRONT-END
// Execute o backend primeiro:
//     nodemon
//
// Depois execute este arquivo:
//     npx ts-node src/testeRequisicoes.ts
//
// Este arquivo contém:
// - listarCartas()
// - pesquisarCartasCriterio()
// - pesquisarCartasPorColecao()
// - buscarCarta()
// - criarCarta()
// - atualizarCarta()
// - removerCarta()

# Observações

* O servidor deve estar em execução antes dos testes.
* O banco de dados deve estar criado e configurado corretamente.
* As credenciais do arquivo `.env` devem coincidir com as do usuário criado no MySQL.
* Caso ocorra erro `ECONNREFUSED`, verificar se o servidor backend está iniciado.
* Caso ocorra erro de autenticação, verificar usuário, senha e permissões do banco de dados.
