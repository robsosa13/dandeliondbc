var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProveedorSchema = Schema({
   numeroProveedor:String,
   nombre : String,
   nit :Number ,
   direccion: String,
   telefono : String ,
   formaPago : String ,
   estado : String 

});

module.exports = mongoose.model('proveedor',ProveedorSchema);