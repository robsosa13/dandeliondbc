var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivoSchema = Schema({ 
    titulo: String,
    descripcion: String, 
    imagen: String,
    precio_compra: Number,
    stock: Number,
    pertenece: String,
    idcategoria: {type: Schema.ObjectId, ref: 'categoria'},
  
});

module.exports = mongoose.model('activo',ActivoSchema); 