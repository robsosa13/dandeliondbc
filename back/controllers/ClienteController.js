var Cliente = require('../models/cliente');
var controller = {
    registerClient: function (req, res) {
        console.log('asd')
        var cliente = new Cliente();
        var params = req.body;
        cliente.numeroCliente = params.numeroCliente;
        cliente.nombre = params.nombre;
        cliente.nit = params.nit;
        cliente.direccion = params.direccion;
        cliente.telefono = params.telefono;
        cliente.formaPago = params.formaPago;
        cliente.estado=params.estado;
        cliente.save((err, cliente_detalle) => {
            if (err) { return res.status(500).send({ message: "Error al guardar" }) }
            if (! cliente_detalle) { return res.status(404).send({ message: "No se guardo Cliente" }) }
            return res.status(200).send({  cliente:  cliente_detalle })
        })},
        getClientes: function (req, res) {
        
        Cliente.find({}).exec((err, clientes) => {
            if (err) { return res.status(500).send({ message: 'Error la devolver los datos' }); }
            if (!clientes) { return res.status(404).send({ message: 'No hay clientes' }); }
            return res.status(200).send({ clientes });

        })
    },
    detailCliente: function (req, res) {
        var id = req.params.id;
        Cliente.find({ _id: id }).exec((err, cliente) => {
            if (err) {
                return res.status(500).send({ message: "Error al consultar" });

            } else
                if (!cliente) {
                    return res.status(404).send({ message: "Cliente no encontrada" });

                } else {
                    return res.status(200).send({ cliente });
                }
        });
 
    }

    // getCliente: function (req, res) {

    //     Cliente.find({}).exec((err, clientes) => {
    //         if (err) { return res.status(500).send({ message: 'Error la devolver los datos' }); }
    //         if (!clientes) { return res.status(404).send({ message: 'No hay clientes' }); }
    //         return res.status(200).send({ clientes });
    //     })
    // },
    // updateClientes: function (req, res) {
    //     var clienteID = req.params.id;
    //     var update = req.body;
    //     Cliente.findByIdAndUpdate(clienteID, update, { new: true }, (err, clienteUpdated) => {

    //         if (err) { return res.status(500).send({ message: 'Error al actualizar' }); }
    //         if (!clienteUpdated) { return res.status(404).send({ message: 'No existe la Cliente' }); }
    //         return res.status(200).send({
    //             cliente: clienteUpdated
    //         });
    //     })
    // },
    // deleteCliente: function (req, res) {
    //     var clienteId = req.params.id;
    //     Cliente.findByIdAndRemove(clienteId, (err, clienteRemoved) => {
    //         if (err) return res.status(500).send({ message: 'No se pudo borrar la Empresa' })
    //         if (!clienteRemoved) return res.status(404).send({ message: 'NO se puede eliminar' })
    //         return res.status(200).send({

    //             cliente: clienteRemoved
    //         })
    //     })
    // },,
    ,
     getByNumberClient:function(req,res){
        var numeroCliente = req.params['numeroCliente'];
        Cliente.find({numeroCliente: new RegExp(numeroCliente,'i')}).exec((err,clienteLista)=>{
            if(err){
                res.status(500).send({message: 'Error en el servidor'});
            }else{
                if(clienteLista){
                    res.status(200).send({clientes:clienteLista});
                }else{
                    res.status(403).send({message: 'No hay ningun registro con ese titulo'});
                }
            }
        });
    }
}
    
module.exports = controller;