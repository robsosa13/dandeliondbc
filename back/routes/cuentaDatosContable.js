var express = require('express');
var cuentaDatosContablesController = require('../controllers/cuentaDatosContableController');

var api = express.Router();


api.get('/cuentas-contables',cuentaDatosContablesController.getCuentasContables);
api.post('/cuentas-contables/registrar',cuentaDatosContablesController.registrarCuentas);

module.exports = api;