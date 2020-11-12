var Proveedor = require('../models/proveedor');
function listProveedor(req, res) {
        // var numeroProveedor = req.params['numeroProveedor'];
    
        Proveedor.find({}).exec((err, proveedor_listado) => {
            if (err) {
                res.status(500).send({ message: 'Error en el servidor' });
            } else {
                if (proveedor_listado) {
                    res.status(200).send({ proveedores: proveedor_listado });
                } else {
                    res.status(403).send({ message: 'No hay ningun registro con ese titulo' });
                }
            }
        });
    }

function get_Proveedor(req,res){
    var id = req.params['id'];

    Proveedor.findById(id,(err,proveedor_data)=>{
        if(proveedor_data){
            res.status(200).send({proveedor:proveedor_data});
        }
    })
}
function registerProveedor(req,res){
    let data = req.body;
    var proveedor = new Proveedor();
    proveedor.numeroProveedor = data.numeroProveedor;
    proveedor.nombre = data.nombre;
    proveedor.nit = data.nit;
    proveedor.direccion = data.direccion;
    proveedor.telefono = data.telefono;
    proveedor.formaPago = data.formaPago;
    proveedor.estado = data.estado;

    proveedor.save((err,proveedor_save)=>{
        if(proveedor_save){
            res.status(200).send({proveedor: proveedor_save});
        }else{
            res.status(500).send(err);
        }
    });
}

function editProveedor(req,res){
    let id = req.params['id'];
    let data = req.body;
    Proveedor.findOneAndUpdate(id,{
        numeroProveedor:data.numeroProveedor, 
            nombre: data.nombre, 
            nit:data.nombreS,
            direccion: data.apellidoP,
            telefono: data.apellidoM, 
            formaPago:data.ci,
            estado: data.cargo,
            }, (err,proveedor_edit)=>{
        if(proveedor_edit){
            res.status(200).send({proveedor: proveedor_edit});
        }else{
            res.status(500).send(err);
        }
    }) 
}

function deleteProveedor(req,res){
    let id = req.params['id'];
    Proveedor.findByIdAndRemove(id,(err,proveedor_delete)=>{
        if(proveedor_delete){
            res.status(200).send({proveedor:proveedor_delete});
        }else{
            res.status(500).send(err);
        }
    })
}
module.exports = {
    registerProveedor,
    editProveedor,
    deleteProveedor,
    listProveedor,
    get_Proveedor
}