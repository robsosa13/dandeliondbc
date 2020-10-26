var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AsignacionSchema = Schema({
    idpersonal: {type: Schema.ObjectId, ref: 'personal'},
    iduser: {type: Schema.ObjectId, ref: 'user'},
    fecha: {type: Date, default: Date.now},

});

module.exports = mongoose.model('asignacion',AsignacionSchema);