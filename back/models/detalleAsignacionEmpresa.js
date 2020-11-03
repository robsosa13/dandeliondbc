var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetalleAsignacionEmpresaSchema = Schema({
    idpersonal: {type: Schema.ObjectId, ref: 'personal'},
    fecha: {type: Date, default: Date.now},
    empresa: {type:Schema.ObjectId, ref:'empresa'}

});

module.exports = mongoose.model('detalleasignacionempresa',DetalleAsignacionEmpresaSchema);