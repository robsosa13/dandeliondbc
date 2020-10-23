var Experiencia = require('../models/experiencia');
var DetalleExperiencia = require('../models/detalleExperiencia');
var Producto = require('../models/producto');

function registrar(req, res) {
    let data = req.body;
    var experiencia = new Experiencia();
    experiencia.idpostulante = data.idpostulante;
    experiencia.iduser = data.iduser;

    experiencia.save((err, venta_save) => {
        if (venta_save) {
            let detalles = data.detalles;

            detalles.forEach((element, index) => {
                var detalleExperiencia = new DetalleExperiencia();
                // detalleExperiencia.idproducto = "";
                // detalleExperiencia.cantidad = "";
                detalleExperiencia.idproducto = element.idproducto;
                detalleExperiencia.cantidad = element.cantidad;
                detalleExperiencia.experiencia = venta_save._id;
                detalleExperiencia.nombreEmpresa = element.nombreEmpresa; 
                detalleExperiencia.tiempoServicioDesde = element.tiempoServicioDesde;
                detalleExperiencia.tiempoServicioHasta = element.tiempoServicioHasta;
                detalleExperiencia.direccion = element.direccion;
                detalleExperiencia.telefono = element.telefono;
                detalleExperiencia.puestoDesempenado = element.puestoDesempenado;
                detalleExperiencia.sueldoInicial = element.sueldoInicial;
                detalleExperiencia.sueldoFinal = element.sueldoFinal;
                detalleExperiencia.motivoCambioTrabajo = element.motivoCambioTrabajo;
                detalleExperiencia.nombreJefeDirecto = element.nombreJefeDirecto;
                detalleExperiencia.puestoJefe = element.puestoJefe;
                detalleExperiencia.solicitarInfo = element.solicitarInfo;


                detalleExperiencia.save((err, detalle_save) => {
                    if (detalle_save) {
                        Producto.findById({ _id: element.idproducto }, (err, producto_data) => {
                            if (producto_data) {
                                Producto.findByIdAndUpdate({ _id: producto_data._id }, { stock: parseInt(producto_data.stock) - parseInt(element.cantidad) }, (err, producto_edit) => {
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

function datos_venta(req, res) {
    var id = req.params['id']; 

    Experiencia.findById(id).populate('idpostulante').populate('iduser').exec((err, data_venta) => {
        if (data_venta) {
            DetalleExperiencia.find({ experiencia: data_venta._id }).populate('idproducto').exec({ idexperiencia: id }, (err, data_detalle) => {
               
                if (data_detalle) {
                    res.status(200).send(
                        {
                            data: {
                                experiencia: data_venta,
                                detalles: data_detalle,
                              
                               
                            }
                          
                        }
                    );
                }
            });
        }
    });
}

function listado_venta(req, res) {
    Experiencia.find().populate('idpostulante').populate('iduser').exec((err, data_ventas) => {
        
        if (data_ventas) {
            res.status(200).send({ experiencias: data_ventas });
        } else {
            res.status(404).send({ message: "No hay ningun registro de experiencia" });
        }
    });
}

function detalles_venta(req, res) {
    var id = req.params['id'];

    DetalleExperiencia.find({ experiencia: id }).populate('idproducto').exec((err, data_detalles) => {
        if (data_detalles) {
            res.status(200).send({ detalles: data_detalles });
        } else {
            res.status(404).send({ message: "No hay ningun registro de experiencia" });
        }
    });
}

module.exports = {
    registrar,
    datos_venta,
    listado_venta,
    detalles_venta
} 