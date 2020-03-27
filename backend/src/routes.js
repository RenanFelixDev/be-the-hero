const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); 

/* ROTA/RECURSO */

/*Métodos HTTP:

GET: Buscar/listar uma informação do beck-end
POST: Criar uma informação no beck-end
PUT: Alterar uma informação no beck-end
DELETE: Deletar uma informação no beck-end

*/

/*Tipos de Parâmetros:

Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo de requisição, utilizado para criar ou alterar recursos

*/ 

/* Bancos de Dados:

SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server ...
NoSQL: MongoDB, CouchDB ...

Driver: SELECT * FROM Users
Query Builder: table('users).select('*').where()
*/

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);








module.exports = routes;