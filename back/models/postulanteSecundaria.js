var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostulanteSecundariaSchema = Schema({
        nombre:String ,
        fechaInicio: Date,
        fechaFin:Date,
        años : Number,
        tieneTitulo: String
})
module.exports = mongoose.model('postulantesecundaria',PostulanteSecundariaSchema); 