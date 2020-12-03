var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetalleFacturaClienteSchema = Schema({    
    factura: {type: Schema.ObjectId, ref: 'facturaCliente'},
    conceptoItem :String,    
    precioItem:Number,
    precioTotalItem:Number, 
    ivaItem:Number,
    itItem:Number,
    fechaRegistro: {type: Date, default: Date.now}
});
module.exports = mongoose.model('detallefacturacliente',DetalleFacturaClienteSchema);