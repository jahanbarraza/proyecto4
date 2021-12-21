const express = require('express');
const morgan = require('morgan'); //para el registro de todas las periticiones y para saber cuando tenemos errores
const path =require('path'); //obtiene la ruta absoluta desde la raiz del disco donde esta instala hasta la carpeta del proyecto
const {mongoose} = require('./database')

const app = express();

//Ajustes
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use('/api', require('./rutas/rutas'))

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function(){
    console.log('Servidor Iniciado en el puerto' + app.get('port'));
})