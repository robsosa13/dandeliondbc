var DetalleFormacion = require('../models/detalleFormacion');

function registrar(req,res){
    var data = req.body;
    
    // var detalleFormacion = new DetalleFormacion();
    // detalleFormacion.primaria.nombre = data.primaria.nombre;
    // detalleFormacion.primaria = data.primaria.nombre;
    // detalleFormacion.primaria = data.primaria.nombre;

    // detalleFormacion.descripcion = data.descripcion;
    // detalleFormacion.nombre = data.nombre;
    // detalleFormacion.descripcion = data.descripcion;
    // detalleFormacion.nombre = data.nombre;
    // detalleFormacion.descripcion = data.descripcion;
    // detalleFormacion.nombre = data.nombre;
    // detalleFormacion.descripcion = data.descripcion;
    // detalleFormacion.nombre = data.nombre;
    // detalleFormacion.descripcion = data.descripcion;


    detalleFormacion.save((err,profesion_save)=>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(profesion_save){
                res.status(200).send({profesion: profesion_save});
            }else{
                res.status(403).send({message: 'La profesion no se pudo registrar'});
            }
        }
    });
}

module.exports = {
    registrar
}