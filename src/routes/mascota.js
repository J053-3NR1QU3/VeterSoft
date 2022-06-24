const express=require('express');
const router=express.Router();
const mascota=require('../controllers/mascota');

router.get('/',mascota.mascota);
router.get('/mascota',mascota.mascota2);
router.post('/insertar', mascota.insertar);
router.post('/actualizar', mascota.actualizar);
router.post('/eliminar', mascota.eliminar);
router.get('/historial',mascota.historial);
router.post('/historialInsertar',mascota.historialInsertar);
router.post('/historialActualizar',mascota.historialActualizar);
router.get('/receta',mascota.receta);
router.get('/consulta',mascota.consulta);
router.get('/diagnostico',mascota.diagnostico);

module.exports = router;