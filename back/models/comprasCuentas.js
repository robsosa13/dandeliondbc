var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComprasCuentasSchema = Schema({
    idcuentasContables: {type: Schema.ObjectId, ref: 'cuentasContables'},
    idcliente: {type: Schema.ObjectId, ref: 'cliente'},
    idfactura: {type: Schema.ObjectId, ref: 'facturaCliente'},
    haber:Number,
    estado:String,
    fechaRegistro: {type: Date, default: Date.now},
    
});
module.exports = mongoose.model('comprascuentas',ComprasCuentasSchema);