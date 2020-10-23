var express = require('express');
var experienciaController = require('../controllers/ExprienciaController');

var api = express.Router();

api.post('/postulante/registrar',experienciaController.registrar);
api.get('/postulante/:id',experienciaController.datos_venta);
api.get('/postulantes',experienciaController.listado_venta);
api.get('/postulante/data/:id',experienciaController.detalles_venta);

module.exports = api;