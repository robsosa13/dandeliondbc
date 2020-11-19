var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CuentasContablesSchema = Schema({
    nombre:String,
    tipo:String,
    numeroCuenta:String
});
module.exports = mongoose.model('cuentascontables',CuentasContablesSchema);