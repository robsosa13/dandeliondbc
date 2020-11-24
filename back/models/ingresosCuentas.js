var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngresosCuentasSchema = Schema({
    idcuentasContables: {type: Schema.ObjectId, ref: 'cuentasContables'},
    idcliente: {type: Schema.ObjectId, ref: 'cliente'},
    idfactura: {type: Schema.ObjectId, ref: 'facturaCliente'},
    debe:Number,
    estado:String,
    fechaRegistro: {type: Date, default: Date.now}    
});
module.exports = mongoose.model('ingresoscuentas',IngresosCuentasSchema);