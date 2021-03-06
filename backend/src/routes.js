const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

/* */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index); //Listar
routes.post('/ongs', OngController.create); //rota

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create); //rota
routes.get('/incidents', IncidentController.index); //rota
routes.delete('/incidents/:id', IncidentController.delete);

module.exports= routes;