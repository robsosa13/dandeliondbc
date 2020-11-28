var express = require('express');
var facturaClienteController = require('../controllers/FacturaClienteController');

var api = express.Router();

api.post('/factura/registrar',facturaClienteController.registrar);//insert
api.get('/factura/:id',facturaClienteController.datos_experiencia);//get all by id
api.get('/facturas',facturaClienteController.getFacturas);//get all by id
api.get('/facturas-detalle',facturaClienteController.getDetalleFacturas);//get all by id

module.exports = api;