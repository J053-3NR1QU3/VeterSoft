const express=require('express'); //Importar el módulo de express
const router=express.Router(); //utilización de Router que ya viene incluido en express

//Importación del controlador
const customerController=require('../controllers/customerController');// se indica la carpeta en la cual se encuentra nuestro controlador

router.get('/',customerController.login);
router.get('/list',customerController.list); //se manda a llamar la funcion list del customerController
router.get('/listc',customerController.listc); 
router.post('/add',customerController.save);
router.get('/delete/:id',customerController.delete);  //agragamos nuestra ruta al controlador y le agregamos el id del metodo eliminar
router.get('/update/:id',customerController.edit);  //agragamos nuestra ruta al controlador y le agregamos el id del metodo editar
router.post('/update/:id',customerController.update);
router.get('/Inicio',customerController.Inicio);
router.post('/verificar',customerController.verificar);
/*router.get('/',(req,res)=>{
    res.send('hola hola');
});*/


module.exports=router; //se exporta router