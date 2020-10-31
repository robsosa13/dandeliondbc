var express = require('express');
var profesionController = require('../controllers/ProfesionController');

var api = express.Router();

api.post('/profesion/registrar',profesionController.registrar);
api.get('/profesion/:id',profesionController.obtener_profesion);
api.put('/profesion/editar/:id',profesionController.editar);
api.delete('/profesion/eliminar/:id',profesionController.eliminar);
api.get('/profesions/:nombre?',profesionController.listar);

module.exports = api;