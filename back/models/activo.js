var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivoSchema = Schema({ 
    titulo: String,

    descripcion: String, 
    imagen: String,
    precio_compra: Number,
    stock: Number,
    //precio_venta: Number,
    pertenece: String,
    idcategoria: {type: Schema.ObjectId, ref: 'categoria'},
   // puntos: Number
});

module.exports = mongoose.model('activo',ActivoSchema); 