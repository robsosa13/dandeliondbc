var express = require('express');
var personalController = require('../controllers/PersonalController');

var api = express.Router();

api.get('/personals',personalController.listar);
api.post('/personal/registrar',personalController.registrar);
api.put('/personal/editar/:id',personalController.editar);
api.delete('/personal/eliminar/:id',personalController.eliminar);
api.get('/personal/:id',personalController.get_personal)

module.exports = api;