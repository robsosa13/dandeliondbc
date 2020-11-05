var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetalleFormacionSchema = Schema({
    experiencia: {type:Schema.ObjectId, ref:'experiencia'},
    primaria: [
        {
            nombre:String,
            fechaInicio:Date,
            fechaFIn:Date
        }
    ],
    secundaria: [
        {
            nombre:String,
            fechaInicio:Date,
            fechaFIn:Date
        }
    ],
    niveltecnicoUniversidad: [
        {
            nombre:String,
            fechaInicio:Date,
            fechaFIn:Date
        }
    ],
    profesional: [
        {
            nombre:String,
            fechaInicio:Date,
            fechaFIn:Date
        }
    ] 
});
module.exports = mongoose.model('detalleFormacion',DetalleFormacionSchema);