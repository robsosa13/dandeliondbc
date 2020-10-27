var Asignacion = require('../models/asignacion');
var DetalleAsignacion = require('../models/detalleAsignacion');
var Activo = require('../models/activo');

function registrar(req, res) {
    let data = req.body;
    var asignacion = new Asignacion();
    asignacion.idpersonal = data.idpersonal;
    asignacion.iduser = data.iduser;

    asignacion.save((err, asignacion_save) => {
        if (asignacion_save) {
            let detalles = data.detalles;

            detalles.forEach((element, index) => {
                var detalleasignacion = new DetalleAsignacion();
                detalleasignacion.idactivo = element.idactivo;
                detalleasignacion.cantidad = element.cantidad;
                detalleasignacion.asignacion = asignacion_save._id;
                console.log('activo ', element.idactivo);
                detalleasignacion.save((err, detalle_save) => {
                    if (detalle_save) {
                        //console.log(detalle_save);
                        // console.log('activo ',element.idactivo);
                        Activo.findById({ _id: element.idactivo }, (err, activo_data) => {
                            console.log('activo ', activo_data);
                            if (activo_data) {
                                Activo.findByIdAndUpdate({ _id: activo_data._id }, { stock: parseInt(activo_data.stock) - parseInt(element.cantidad) }, (err, activo_edit) => {
                                    res.end();
                                })
                            } else {
                                res.send(err);
                            }
                        });
                    } else {
                        res.send(err);
                    }
                });

            });

        } else {
            res.send(err);
        }
    });
}

function datos_asignacion(req, res) {
    var id = req.params['id'];
    Asignacion.findById(id).populate('idpersonal').populate('iduser').exec((err, data_asignacion) => {
        if (data_asignacion) {
            DetalleAsignacion.find({ asignacion: data_asignacion._id }).populate('idactivo').exec({ idasignacion: id }, (err, data_detalle) => {
                if (data_detalle) {
                    console.log(data_detalle)
                    res.status(200).send(
                        {
                            data: {
                                asignacion: data_asignacion,
                                detalles: data_detalle,
                            }
                        }
                    );
                }
            });
        }
    });
}

function listado_asignacion(req, res) {
    Asignacion.find().populate('idpersonal').populate('iduser').exec((err, data_asignaciones) => {
        if (data_asignaciones) {
            res.status(200).send({ asignaciones: data_asignaciones });
        } else {
            res.status(404).send({ message: "No hay ningun registro de activo" });
        }
    });
}

function detalles_asignacion(req, res) {
    var id = req.params['id'];

    DetalleAsignacion.find({ activo: id }).populate('idactivo').exec((err, data_detalles) => {
        if (data_detalles) {
            res.status(200).send({ detalles: data_detalles });
        } else {
            res.status(404).send({ message: "No hay ningun registro de activo" });
        }
    });
}

module.exports = {
    registrar,
    datos_asignacion,
    listado_asignacion,
    detalles_asignacion
}