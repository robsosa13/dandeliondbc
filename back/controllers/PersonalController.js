var Personal = require('../models/personal');

function listar(req,res){
    Personal.find((err,personals_data)=>{
        if(personals_data){
            res.status(200).send({personals: personals_data});
        }else{
            res.status(403).send({message: 'No hay personals en la bd'});
        }
    })
}

function get_personal(req,res){
    var id = req.params['id'];

    Personal.findById(id,(err,personal_data)=>{
        if(personal_data){
            res.status(200).send({personal:personal_data});
        }
    })
}


function registrar(req,res){
    let data = req.body;
    var personal = new Personal();
    personal.nombre = data.nombre;
    personal.nombreS = data.nombreS;
    personal.apellidoP = data.apellidoP;
    personal.apellidoM = data.apellidoM;
    personal.ci = data.ci;
    personal.cargo = data.cargo;
    personal.profesion = data.profesion;

    personal.save((err,personal_save)=>{
        if(personal_save){
            res.status(200).send({personal: personal_save});
        }else{
            res.status(500).send(err);
        }
    });

}

function editar(req,res){
    let id = req.params['id'];
    let data = req.body;
    Personal.findOneAndUpdate(id,{
            nombre: data.nombre, 
            nombreS:data.nombreS,
            apellidoP: data.apellidoP,
            apellidoM: data.apellidoM, 
            ci:data.ci,
            cargo: data.cargo,
            profesion: data.profesion
            }, (err,personal_edit)=>{
        if(personal_edit){
            res.status(200).send({personal: personal_edit});
        }else{
            res.status(500).send(err);
        }
    }) 
}

function eliminar(req,res){
    let id = req.params['id'];
    Personal.findByIdAndRemove(id,(err,personal_delete)=>{
        if(personal_delete){
            res.status(200).send({personal:personal_delete});
        }else{
            res.status(500).send(err);
        }
    })
}
module.exports = {
    registrar,
    editar,
    eliminar,
    listar,
    get_personal
}