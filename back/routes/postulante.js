var express = require('express');
var postulanteController = require('../controllers/PostulanteController');

var api = express.Router();

api.get('/postulantes',postulanteController.listar);
api.post('/postulante/registrar',postulanteController.registrar);
api.put('/postulante/editar/:id',postulanteController.editar);
api.delete('/postulante/eliminar/:id',postulanteController.eliminar);
api.get('/postulante/:id',postulanteController.get_postulante)
api.get('/postulantes/:profesion?',postulanteController.listar);

module.exports = api;