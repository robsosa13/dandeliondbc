var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExperienciaSchema = Schema({
    idpostulante: {type: Schema.ObjectId, ref: 'postulante'},
    iduser: {type: Schema.ObjectId, ref: 'user'},
    fecha: {type: Date, default: Date.now},

});

module.exports = mongoose.model('experiencia',ExperienciaSchema);