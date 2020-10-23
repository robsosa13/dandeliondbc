var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
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
    profesion:String
    // nombres: String,
    // dni: String,
    // correo: String,
    // puntos: Number,
    // createAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('cliente',ClienteSchema);