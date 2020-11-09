var express = require('express');
var experienciaController = require('../controllers/ExprienciaController');

var api = express.Router();

api.post('/experiencia/registrar',experienciaController.registrar);//insert
api.get('/experiencia/:id',experienciaController.datos_experiencia);//get all by id
api.get('/experiencias',experienciaController.listado_experiencia);//get all
api.get('/experiencia/data/:id',experienciaController.detalles_experiencia);//get detalle by id
api.put('/experiencia/edit/:id',experienciaController.editarExperiencia);
api.put('/experiencia/detail-edit/:id',experienciaController.editarDetalleExperiencia);//update detail expe
api.post('/experiencia/adicionar',experienciaController.adicionar_experiencia);
api.get('/experiencias/:profesion?',experienciaController.listar);
module.exports = api;