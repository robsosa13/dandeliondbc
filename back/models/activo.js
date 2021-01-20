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
    fechaCompra: Date  ,
    fechaIndicioDepreciacion: Date  ,
    idProveedor:{type: Schema.ObjectId, ref: 'proveedor'},
    porcentajeDepreciacion:Number,
    vidaUtil:Number,
    valorDepreciacio:Number
});


module.exports = mongoose.model('activo',ActivoSchema); 
/**
 * a)	Código del Activo:        Código identificativo contable.
b)	Nombre o descripción del Activo:      Terreno
Edificaciones
Maquinarias
Equipos
Muebles y Enseres
Equipos de computación
Vehiculos
Otros
c)	Fecha de Compra:

 */