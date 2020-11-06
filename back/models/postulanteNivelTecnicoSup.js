var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostulanteNivelTecnicoSchema = Schema({
        nombre:String ,
        fechaInicio: Date,
        fechaFin:Date,
        años : Number,
        tieneTitulo: String

});

module.exports = mongoose.model('postulanteniveltecnico',PostulanteNivelTecnicoSchema); 