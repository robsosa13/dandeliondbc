var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExperienciaCargoSchema = Schema({ 
    idpostulante: {type: Schema.ObjectId, ref: 'postulante'},
    fechaRegistro: {type: Date, default: Date.now},
    cargo:String,
    anios:Number
});

module.exports = mongoose.model('experienciacargo',ExperienciaCargoSchema); 