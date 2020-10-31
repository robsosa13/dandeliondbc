var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfesionSchema = Schema({
    titulo: String,
    descripcion: String,

});

module.exports = mongoose.model('profesion',ProfesionSchema);