'use strict'
var express = require('express');
var EmpresaController = require('../controllers/EmpresaController');
//middleware //metodo antes que se ejecute el controlador
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir:'./uploads'});

var router = express.Router();

router.post('/test/test',EmpresaController.test);
router.post('/save-empresa',EmpresaController.saveEmpresa);
router.get("/detail-empresa/:id",EmpresaController.detailEmpresa);
router.get('/empresas',EmpresaController.getEmpresas);
router.put('/empresa/:id',EmpresaController.updateEmpresas);
router.delete('/empresa/:id',EmpresaController.deleteEmpresa);
router.get(`/empresa-search`,EmpresaController.listadoEmpresaByDate);
router.get('/empresa-count',EmpresaController.getEmpresasCount);

module.exports = router;