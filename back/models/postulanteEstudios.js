var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostulanteEstudiosSchema = Schema({
        nombre:String ,
        fechaInicio: Date,
        fechaFin:Date,
        años : Number,
        tieneTitulo: String

});
module.exports = mongoose.model('postulanteestudios',PostulanteEstudiosSchema); 