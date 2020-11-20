var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT ||  4201;

//ROUTES 
var user_routes = require('./routes/user');
var categoria_routes = require('./routes/categoria');
var producto_routes = require('./routes/producto');
var postulante_routes = require('./routes/postulante');
var experiencia_routes = require('./routes/experiencia'); 
var empresa_routes= require('./routes/empresa');
var activo_routes = require('./routes/activo');
var personal_routes = require('./routes/personal');
var asignacion_routes = require('./routes/asignacion');
var profesion_routes = require('./routes/profesion');
var cliente_routes = require('./routes/cliente');
var proveedor_routes = require('./routes/proveedor');
var facturar_routes = require('./routes/facturaCliente');

 
var app = express();

mongoose.connect('mongodb://localhost:27017/sistemadb',{useUnifiedTopology: true, useNewUrlParser: true},(err,res)=>{
    if(err){
        throw err;
    }
    else{
        console.log("Corriendo servidor");
        app.listen(port, function(){
            console.log("Servidor conectado en " + port);
            
        });
        
    }
});
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use((req,res,next)=>{
    res.header('Content-Type: application/json');
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api',user_routes);
app.use('/api',categoria_routes);
app.use('/api',producto_routes);
app.use('/api',experiencia_routes);
app.use('/api',activo_routes);
app.use('/api',empresa_routes); 
app.use('/api',postulante_routes);
app.use('/api',personal_routes);
app.use('/api',asignacion_routes);
app.use('/api',profesion_routes);
app.use('/api',proveedor_routes);
app.use('/api',cliente_routes);
app.use('/api',facturar_routes);
   







module.exports = app;