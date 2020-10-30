var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostulanteSchema = Schema({
    nombres : String,
    apellidoPaterno : String,
    apellidoMaterno : String,
    edad : Number,
    domicilio : String,
    zona : String,
    sexo :String,
    ciudad:String,
    lugarNacimiento:String,
    FechaNacimiento:String,
    naionalidad:String, 
    ci:Number,
    expedido:String,
    estadoCivil:String,
    viveCon:String,
    personaDependencia:String,
    profesion:String,
    estadoPostulante:String
});

module.exports = mongoose.model('postulante',PostulanteSchema);