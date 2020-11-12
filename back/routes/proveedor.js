var express = require('express');
var proveedorController = require('../controllers/ProveedorController');

var api = express.Router();


api.post('/proveedor/registrar',proveedorController.registerProveedor);
// api.put('/proveedor/editar/:id',proveedorController.editProveedor);
// api.delete('/proveedor/eliminar/:id',proveedorController.deleteProveedor);
// api.get('/proveedor/:id',proveedorController.get_postulante);
api.get('/proveedores',proveedorController.listProveedor);

module.exports = api;