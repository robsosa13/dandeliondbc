var Profesion = require('../models/profesion');

function registrar(req,res){
    var data = req.body;
    console.log('OK')
    var profesion = new Profesion();
    profesion.nombre = data.nombre;
    profesion.descripcion = data.descripcion;

    profesion.save((err,profesion_save)=>{
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

function obtener_profesion(req,res){
    var id = req.params['id'];
    
    Profesion.findById({_id: id}, (err,profesion_data) =>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(profesion_data){
                res.status(200).send({profesion: profesion_data});
            }else{
                res.status(403).send({message: 'La profesion no existe'});
            }
        }
    });
    
}

function editar(req,res){
    var id = req.params['id'];
    var data = req.body;

    Profesion.findByIdAndUpdate({_id:id},{nombre: data.nombre, descripcion : data.descripcion},(err,profesion_edit)=>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
           if(profesion_edit){
            res.status(200).send({profesion: profesion_edit});
           }else{
            res.status(403).send({message: 'La profesion no se pudo actualizar'});
           }
        }
    });
}

function eliminar(req,res)
{
    var id = req.params['id'];

    Profesion.findByIdAndRemove({_id:id},(err,profesion_delete)=>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(profesion_delete){
                res.status(200).send({profesion: profesion_delete});
            }else{
                res.status(403).send({message: 'La profesion no se pudo eliminar'}); 
            }
        }
    });
}

function listar(req,res){
    var nombre = req.params['nombre'];
    Profesion.find({nombre: new RegExp(nombre,'i')}, (err,profesion_listado)=>{
        if(err){
            res.status(500).send({message: err});
        }else{
            if(profesion_listado){
                res.status(200).send({profesions: profesion_listado});
            }else{
                res.status(403).send({message: 'No hay registros con ese titulo'}); 
            }
        }
    });

}

module.exports = {
    registrar,
    obtener_profesion,
    editar,
    eliminar,
    listar
}