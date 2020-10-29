var express = require('express');
var asignacionController = require('../controllers/AsignacionController');

var api = express.Router();

api.post('/asignacion/registrar',asignacionController.registrar);
api.get('/asignacion/:id',asignacionController.datos_asignacion);
api.get('/asignaciones',asignacionController.listado_asignaciones);
api.get('/asignacion/data/:id',asignacionController.detalles_asignacion);
api.get('/asignacion-search',asignacionController.listado_asignacionByDate);
module.exports = api;