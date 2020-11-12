var express = require('express');
var clienteController = require('../controllers/ClienteController');

var api = express.Router();


api.post('/cliente/registrar',clienteController.registerClient);
// api.put('/cliente/editar/:id',clienteController.updateClientes);
// api.delete('/cliente/eliminar/:id',clienteController.deleteCliente);
// api.get('/cliente/:id',clienteController.getCliente);
api.get('/clientes',clienteController.getClientes);

module.exports = api;