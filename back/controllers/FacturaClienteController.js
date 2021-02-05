var Cliente = require('../models/cliente');
var FacturaCliente = require('../models/facturaCliente');
var DetalleFacturaCliente = require('../models/detalleFacturaCliente');
var CuentaDatosContables = require('../models/cuentaDatosContables')

function registrar(req, res) {
    let data = req.body;
    console.log('test')
    var cuentasDatosContables = new CuentaDatosContables()
    var factura = new FacturaCliente();
    factura.idCliente = data.idCliente;
    factura.iduser = data.iduser;
    factura.numeroFactura = data.numeroFactura;
    factura.conceptoItem = data.conceptoItem;
    factura.precioTotal = data.precioTotal;
    factura.ivaTotal = data.ivaTotal;
    factura.itTotal = data.itTotal;
    factura.save((err, factura_save) => {
        if (factura_save) {
            let detalles = data.detalles;
            detalles.forEach((element, index) => {
                var detalleFacturaCliente = new DetalleFacturaCliente();
                detalleFacturaCliente.factura = factura_save._id;
                
                detalleFacturaCliente.conceptoItem = element.conceptoItem;
                detalleFacturaCliente.precioItem = element.precioItem;
                detalleFacturaCliente.precioTotalItem = element.precioTotalItem;
                detalleFacturaCliente.ivaItem = element.ivaItem;
                detalleFacturaCliente.itItem = element.itItem;
                detalleFacturaCliente.save((err, detalle_save) => {
                    if (detalle_save) {

                        // cuentasDatosContables.idFactura=factura_save._id
                        // cuentasDatosContables.debe= (element.precioTotalItem+ ((element.precioTotalItem*11.3)))


                        console.log(factura_save)
                        console.log(detalle_save)
                        res.end();
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
function datos_experiencia(req, res) {
    var id = req.params['id'];
    FacturaCliente.findById(id).populate('idCliente').populate('iduser').exec((err, data_venta) => {
        if (data_venta) {
            DetalleFacturaCliente.find({ factura: data_venta._id }).populate('idproducto').exec({ idfactura: id }, (err, data_detalle) => {
                if (data_detalle) {
                    console.log(data_venta)
                    console.log(data_detalle)
                    res.status(200).send(
                        {
                            data: {
                                factura: data_venta,
                                detalles: data_detalle,
                            }
                        }
                    );
                }
            });
        }
    });
}
function getFacturas(req, res) {
    FacturaCliente.find().populate('idCliente').populate('iduser').exec((err, fatura_data) => {

        if (fatura_data) {
            console.log('factura data', fatura_data)
            res.status(200).send({ facturas: fatura_data });

        } else {
            res.status(404).send({ message: "No hay ningun registro de facturas" });
        }
    });
}
function getDetalleFacturas(req, res) {
    DetalleFacturaCliente.find().exec((err, fatura_detalle) => {
        console.log('factura detalle', fatura_detalle)
        if (fatura_detalle) {
            console.log('factura detalle', fatura_detalle)
            res.status(200).send({ facturasDetalle: fatura_detalle });

        } else {
            res.status(404).send({ message: "No hay ningun registro de detalle" });
        }
    });
}
module.exports = {
    registrar, datos_experiencia, getFacturas,getDetalleFacturas
} 