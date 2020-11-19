var CuentaContable = require('../models/cuentasContables');

function registrar(req, res) {

    var data = req.body;
        var cuentaContable = new CuentaContable();
        cuentaContable.nombre = data.nombre;
        cuentaContable.tipo = data.tipo;
        cuentaContable.numeroCuenta = data.numeroCuenta;
    
        cuentaContable.save((err, cuentaContable_save) => { 
            if (err) {
                res.status(500).send({ message: 'Error en el servidor' });
            } else {
                if (cuentaContable_save) {
                    res.status(200).send({ cuentaContable: cuentaContable_save });
                } else {
                    res.status(403).send({ message: 'No se registro la cuenta' });
                }
            }
        });
}

function listar(req, res) {
    var nombre = req.params['nombre'];

    CuentaContable.find({ nombre: new RegExp(nombre, 'i') }).exec((err, cuenta_listado) => {
        if (err) {
            res.status(500).send({ message: 'Error en el servidor' });
        } else {
            if (cuenta_listado) {
                res.status(200).send({ cuentasContables: cuenta_listado });
            } else {
                res.status(403).send({ message: 'No hay ningun registro con ese titulo' });
            }
        }
    });
}


module.exports = {
    registrar,
    listar}