var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FacturaClienteSchema = Schema({

    idCliente: {type: Schema.ObjectId, ref: 'cliente'},
    iduser: {type: Schema.ObjectId, ref: 'user'},
    numeroFactura:Number,
    fechaRegistro: {type: Date, default: Date.now},
    conceptoItem :String ,
    precioTotal:Number,
    ivaTotal:Number,
    itTotal: Number
});
module.exports = mongoose.model('facturacontable',FacturaClienteSchema);
