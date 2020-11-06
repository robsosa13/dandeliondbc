var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostulantePrimariaSchema = Schema({
        nombre:String ,
        fechaInicio: Date,
        fechaFin:Date,
        años : Number,
        tieneTitulo: String

});

module.exports = mongoose.model('postulanteprimaria',PostulantePrimariaSchema); 