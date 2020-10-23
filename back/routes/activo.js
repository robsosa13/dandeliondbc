var express = require('express');
var activoController = require('../controllers/ActivoController');
var multipart = require('connect-multiparty');
var path = multipart({uploadDir: './uploads/activos'});

var api = express.Router();
 
api.post('/activo/registrar',path,activoController.registrar);
api.get('/activos/:titulo?',activoController.listar);
api.put('/activo/editar/:id/:img?',path,activoController.editar);
api.get('/activo/:id',activoController.obtener_activo);
api.delete('/activo/:id',activoController.eliminar);
api.put('/activo/stock/:id',activoController.update_stock); 
api.get('/activo/img/:img',activoController.get_img) 

module.exports = api;