const express = require('express'); //importar módulo o dependencia de express
const app=express(); //Elemento de express y contiene métodos 
const path=require('path');//Importar el módulo path
const morgan=require('morgan');//Importar el módulo de Morgan
const mysql=require('mysql');//Importar em módulo de mysql
const myConnection=require('express-myconnection'); //importar express-myconnection

//configuración del puerto por el cual estará trabajando el servidor
app.set('port',process.env.PORT || 3000)
app.set('view engine','ejs'); //ejs es el motor de plantilla
app.set('views', path.join(__dirname,'views'));// se indica donde esta la carpeta de vistas, dirname nos ayuda a encontrar la ruta de una carpeta indicada

app.use(morgan('dev'));//Podremos utilizar el comando dev

const customerRouters=require('./routes/customers');// se manda a llamar el archivo de nuestras rutas
const usuarioRouters=require('./routes/usuario');
const clienteRouters=require('./routes/cliente');
const mascotaRouters=require('./routes/mascota');
const proveedorRouters=require('./routes/proveedor');
const medicamentoRouters=require('./routes/medicamento');
const materialRouters=require('./routes/material');
//const mascota2Routers=require('./routes/mascota2');
//Obtenemos el puerto
app.listen(app.get('port'),()=>{
    console.log('Server on port 3000'); //Se envia mensaje por consola
});

//establecer nuestra conexión la base de datos.
app.use(myConnection(mysql,{ 
    //host:'localhost',
    user:'martha',
     //user:'root',
    password:'123',
    //password:'',
    //port:3006,
    database:'ejemplobd'
    
}));

app.use(express.urlencoded({extended:false}));

app.use('/',customerRouters); // usamos nuestra constante de nuestro archivo de rutas
app.use('/usuario',usuarioRouters);
app.use('/cliente',clienteRouters);
app.use('/mascota',mascotaRouters);
app.use('/proveedor',proveedorRouters);
app.use('/medicamento',medicamentoRouters);
app.use('/material',materialRouters);
//app.use('/mascota2',mascotaRouters);

app.use(express.static(path.join(__dirname,'public'))); //indicamos la 