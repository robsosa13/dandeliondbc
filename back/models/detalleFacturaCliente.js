var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetalleFacturaClienteSchema = Schema({

    idCliente: {type: Schema.ObjectId, ref: 'postulante'},
    iduser: {type: Schema.ObjectId, ref: 'user'},
    fecha: {type: Date, default: Date.now},
    concepto :String ,
    precioUnitario:Number ,
    iva:Number,
    total: Decimal
});
module.exports = mongoose.model('detallefacturacliente',DetalleFacturaClienteSchema);
