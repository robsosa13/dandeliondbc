var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetalleFormacionSchema = Schema({
    experiencia: {type:Schema.ObjectId, ref:'experiencia'},
    primaria: String,
    secundaria: String,
    niveltecnicoUniversidad: String,
    profesional: String,
    
});
module.exports = mongoose.model('detalleexperiencia',DetalleFormacionSchema);