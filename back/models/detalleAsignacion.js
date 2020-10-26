var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetalleAsignacionSchema = Schema({
    idactivo: {type: Schema.ObjectId, ref: 'activo'},
    cantidad: Number,
    asignacion: {type:Schema.ObjectId, ref:'asignacion'}
});

module.exports = mongoose.model('detalleasignacion',DetalleAsignacionSchema);