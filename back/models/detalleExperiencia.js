var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetalleExperienciaSchema = Schema({
    idproducto: {type: Schema.ObjectId, ref: 'producto'},
    cantidad: Number,
    experiencia: {type:Schema.ObjectId, ref:'experiencia'},
   
   
    nombreEmpresa: String,
    tiempoServicioDesde: String,
    tiempoServicioHasta: String, 
    direccion: String,
    telefono: String,
    puestoDesempenado: String,
    sueldoInicial: String, 
    sueldoFinal: String,
    motivoCambioTrabajo: String,
    nombreJefeDirecto: String,
    puestoJefe: String,
    solicitarInfo: String,

});

module.exports = mongoose.model('detalleexperiencia',DetalleExperienciaSchema);