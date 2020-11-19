var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FacturaClienteSchema = Schema({

    idCliente: {type: Schema.ObjectId, ref: 'postulante'},
    iduser: {type: Schema.ObjectId, ref: 'user'},
    fecha: {type: Date, default: Date.now},
    concepto :String ,
    precioUnitario:Number ,
    iva:Number,
    total: Decimal
});
module.exports = mongoose.model('facturacontable',FacturaClienteSchema);
