var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
   numeroCliente:String,
   nombre : String,
   nit :Number ,
   direccion: String,
   telefono : String ,
   formaPago : String ,
   estado : String 

});

module.exports = mongoose.model('cliente',ClienteSchema);