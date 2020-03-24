const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors(/** {
    origin: 'http://meuapp.com'
} */));
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Metodos HTTP:
 * GET....: Buscar/listar uma informacao do backend
 * POST...: Criar uma informacao no backend
 * PUT....: Alterar uma informacao no backend
 * DELETE.: Deletar uma informacao no backend
 */

/**
 * Tipos de parametros:
 * 
 * Query Params: parametros nomeados enviados na rota apos "?" (filtros, paginacao) 
 *  Ex: localhost:3333/users?name=Antony
 * Route Params: parametros utilizados para identificar recursos
 *  Ex: app.get('/users/:id', (request, response)) =>{} // localhost:3333/users/1
 * Request body: Corpo da requisicao utilizado para criar ou alterar recursos
 */

 /**
  * DBs:
  * 
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB
  * 
  * Driver........: SELECT * FROM users
  * Query builder.: table('users').select('*').where("...")
  */