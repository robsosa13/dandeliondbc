var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CuentaDatosContablesSchema = Schema({
    idcuentaContable: {type: Schema.ObjectId, ref: 'cuentasContables'},
    idfactura: {type: Schema.ObjectId, ref: 'facturaCliente'},
    debe:Decimal,
    haber:Decimal,
    fechaRegistro: {type: Date, default: Date.now},
});
module.exports = mongoose.model('cuentadatoscontables',CuentaDatosContablesSchema);