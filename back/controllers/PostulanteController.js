var Postulante = require('../models/postulante');

function listar(req,res){
    Postulante.find((err,postulantes_data)=>{
        if(postulantes_data){
            res.status(200).send({postulantes: postulantes_data});
        }else{
            res.status(403).send({message: 'No hay postulantes en la bd'});
        }
    })
}
function get_postulante(req,res){
    var id = req.params['id'];

    Postulante.findById(id,(err,postulante_data)=>{
        if(postulante_data){
            res.status(200).send({postulante:postulante_data});
        }
    })
} 
function registrar(req,res){
    let data = req.body;
    var postulante = new Postulante();
    postulante.nombres = data.nombres;
    postulante.apellidoPaterno = data.apellidoPaterno;
    postulante.apellidoMaterno = data.apellidoMaterno;
    postulante.edad = data.edad;
    postulante.domicilio = data.domicilio;
    postulante.zona = data.zona;
    postulante.sexo = data.sexo;
    postulante.ciudad = data.ciudad;
    
    postulante.lugarNacimiento = data.lugarNacimiento; 
    postulante.FechaNacimiento = data.FechaNacimiento;
    postulante.naionalidad = data.naionalidad;
    postulante.ci = data.ci;
    postulante.expedido = data.expedido;
    postulante.estadoCivil = data.estadoCivil;
    postulante.viveCon = data.viveCon;
    postulante.personaDependencia = data.personaDependencia;
    postulante.profesion = data.profesion;

    postulante.save((err,postulante_save)=>{
        console.log(postulante_save)
        if(postulante_save){
            res.status(200).send({postulante: postulante_save});
        }else{
            res.status(500).send(err);
        }
    });
    // let data = req.body;
    // var postulante = new Postulante();
    // postulante.nombres = data.nombres;
    // postulante.correo = data.correo;
    // postulante.dni = data.dni;
    // postulante.puntos = 10;

    // postulante.save((err,cliente_save)=>{
    //     if(cliente_save){
    //         res.status(200).send({postulante: cliente_save});
    //     }else{
    //         res.status(500).send(err);
    //     }
    // });

}

function editar(req,res){
    let id = req.params['id'];
    let data = req.body;

    Postulante.findOneAndUpdate(id,{nombres: data.nombres, dni:data.dni, correo: data.correo}, (err,postulante_edit)=>{
        if(postulante_edit){
            res.status(200).send({postulante: postulante_edit});
        }else{
            res.status(500).send(err);
        }
    })
}

function eliminar(req,res){
    let id = req.params['id'];

    Postulante.findByIdAndRemove(id,(err,postulante_delete)=>{
        if(postulante_delete){
            res.status(200).send({postulante:postulante_delete});
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
    get_postulante
}