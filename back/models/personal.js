var mongoose = require('mongoose');//trabaja con modelos de db
var Schema = mongoose.Schema;
var PersonalSchema= Schema({
    nombre : String,
    nombreS : String,
    apellidoP : String,
    apellidoM : String,
    ci:Number,
    cargo:String,
    profesion:String,
   
  
});
module.exports = mongoose.model('personal',PersonalSchema);
// En base de datos lo pluraliza