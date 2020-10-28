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
    modelo:String ,
    marca:String, 
    nroSerie:String,
    codigoDBC:String,
    fechaRegistro: {type: Date, default: Date.now},



    fechaCompra: Date  
    
});

// ActivoSchema.virtual('fechaCompra')
//   .set(function(fecha) {

//     this.fechaCompra_iso = new Date(fecha);
//   })
//   .get(function(){
  
//     return this.fechaCompra_iso.toISOString().substring(0,10);
//   });



module.exports = mongoose.model('activo',ActivoSchema); 