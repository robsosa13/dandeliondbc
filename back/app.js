var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');  // Importa cors
var port = process.env.PORT ||  4201;

// Rutas
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
var cuentas_contables = require('./routes/cuentaDatosContable');

var app = express();

mongoose.connect('mongodb+srv://lsrev311:tc1rWZn1x6YgtQQb@clustermongo.v53ws.mongodb.net/sistemadb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Conectado a MongoDB Atlas");
  app.listen(port, function() {
    console.log("Servidor conectado en " + port);
  });
})
.catch(err => {
  console.error("Error al conectar a MongoDB Atlas:", err.message);
  process.exit(1); // Salir si no se puede conectar
});

// Usa CORS para permitir solicitudes desde otros orígenes
app.use(cors());  // Habilita CORS para todas las rutas

// Configura el uso de body-parser para manejar JSON
app.use(bodyparser.json());

// Rutas de la API
app.use('/api', user_routes);
app.use('/api', categoria_routes);
app.use('/api', producto_routes);
app.use('/api', experiencia_routes);
app.use('/api', activo_routes);
app.use('/api', empresa_routes); 
app.use('/api', postulante_routes);
app.use('/api', personal_routes);
app.use('/api', asignacion_routes);
app.use('/api', profesion_routes);
app.use('/api', proveedor_routes);
app.use('/api', cliente_routes);
app.use('/api', facturar_routes);
app.use('/api', cuentas_contables);

module.exports = app;
