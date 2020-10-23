var Empresa = require('../models/empresa');
var fs = require('fs');
var path = require('path');

const { exists } = require('../models/empresa');
var controller = {
    test: function (req, res) {
        return res.status(200).send({
            message: 'Soy el metodo de accion test empresa'
        });
    },
    saveEmpresa: function (req, res) {
        var empresa = new Empresa();
        var params = req.body;
        // persona.id = params.id;
        empresa.numeroEmpresa = params.numeroEmpresa;
        empresa.nombreEmpresa = params.nombreEmpresa;
        empresa.direccion = params.direccion;
        empresa.contacto = params.contacto;
        empresa.telefono = params.telefono;
        empresa.llamadasEstado = params.llamadasEstado;
        empresa.correo = params.correo;
        empresa.etapaVenta = params.etapaVenta; 
        empresa.medioComunicacion = params.medioComunicacion;
        empresa.estadoSeguimiento = params.estadoSeguimiento;
        empresa.save((err, empresaStored) => {

            if (err) { return res.status(500).send({ message: "Error al guardar" }) }
            if (! empresaStored) { return res.status(404).send({ message: "No se guardo Empresa" }) }
            return res.status(200).send({  empresa:  empresaStored })
        })

    },
    detailEmpresa: function (req, res) {
        var id = req.params.id;
        Empresa.find({ _id: id }).exec((err, empresa) => {
            if (err) {
                return res.status(500).send({ message: "Error al consultar" });

            } else
                if (!empresa) {
                    return res.status(404).send({ message: "Empresa no encontrada" });

                } else {
                    return res.status(200).send({ empresa });
                }
        });

    },
    getEmpresas: function (req, res) {
        
        Empresa.find({}).exec((err, empresas) => {
            if (err) { return res.status(500).send({ message: 'Error la devolver los datos' }); }
            if (!empresas) { return res.status(404).send({ message: 'No hay empresas' }); }
            return res.status(200).send({ empresas });

        })
    },
    getEmpresa: function (req, res) {

        Empresa.find({}).exec((err, empresas) => {
            if (err) { return res.status(500).send({ message: 'Error la devolver los datos' }); }
            if (!empresas) { return res.status(404).send({ message: 'No hay empresas' }); }
            return res.status(200).send({ empresas });
        })
    },
    updateEmpresas: function (req, res) {
        var empresaID = req.params.id;
        var update = req.body;
        Empresa.findByIdAndUpdate(empresaID, update, { new: true }, (err, empresaUpdated) => {

            if (err) { return res.status(500).send({ message: 'Error al actualizar' }); }
            if (!empresaUpdated) { return res.status(404).send({ message: 'No existe la Empresa' }); }
            return res.status(200).send({
                empresa: empresaUpdated
            });
        })
    },
    deleteEmpresa: function (req, res) {
        var empresaId = req.params.id;
        Empresa.findByIdAndRemove(empresaId, (err, empresaRemoved) => {
            if (err) return res.status(500).send({ message: 'No se pudo borrar la Empresa' })
            if (!empresaRemoved) return res.status(404).send({ message: 'NO se puede eliminar' })
            return res.status(200).send({

                empresa: empresaRemoved
            })
        })
    }
};
module.exports = controller;