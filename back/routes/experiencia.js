var express = require('express');
var experienciaController = require('../controllers/ExprienciaController');

var api = express.Router();

api.post('/experiencia/registrar',experienciaController.registrar);
api.get('/experiencia/:id',experienciaController.datos_venta);
api.get('/experiencias',experienciaController.listado_venta);
api.get('/experiencia/data/:id',experienciaController.detalles_venta);

module.exports = api; 