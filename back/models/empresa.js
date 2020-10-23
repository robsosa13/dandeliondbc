var mongoose = require('mongoose');//trabaja con modelos de db
var Schema = mongoose.Schema;//esquema del modelo

var EmpresaSchema= Schema({
    //id : String,
    numeroEmpresa : String,
    nombreEmpresa : String,
    direccion : String,
    contacto : String,
    telefono : String,
    llamadasEstado : String,
    correo : String,
    etapaVenta : String,
    medioComunicacion :String,
    estadoSeguimiento:String
})
module.exports = mongoose.model('Empresa',EmpresaSchema);
// En base de datos lo pluraliza