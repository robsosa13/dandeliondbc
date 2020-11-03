var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfesionSchema = Schema({
    nombre: String,
    descripcion: String,

});

module.exports = mongoose.model('profesion',ProfesionSchema);