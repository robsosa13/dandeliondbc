
var CuentaDatosContables = require('../models/cuentaDatosContables')


function getCuentasContables(req, res) {
    console.log('test')
    CuentaDatosContables.find().exec((err, cuentaDatosContables) => {
console.log(cuentaDatosContables)
        if (cuentaDatosContables) {
            console.log('factura data', cuentaDatosContables)
            res.status(200).send({ cuentas: cuentaDatosContables });

        } else {
            res.status(404).send({ message: "No hay ningun registro de facturas" });
        }
    });
}
function registrarCuentas(req, res) {
console.log('test')
   var cuentasContables = new CuentaDatosContables();
        var params = req.body;
    
        cuentasContables.debe = params.debe;
        cuentasContables.haber = params.haber;

        
        cuentasContables.save((err, cuentassave) => {

            if (err) { return res.status(500).send({ message: "Error al guardar" }) }
            if (! cuentassave) { return res.status(404).send({ message: "No se guardo  Cuenta" }) }
            return res.status(200).send({  cuentas:  cuentassave })
        })
}

module.exports = {
    getCuentasContables,registrarCuentas 
} 