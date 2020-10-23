var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExperienciaSchema = Schema({
    idcliente: {type: Schema.ObjectId, ref: 'cliente'},
    iduser: {type: Schema.ObjectId, ref: 'user'},
    fecha: {type: Date, default: Date.now},

});

module.exports = mongoose.model('experiencia',ExperienciaSchema);