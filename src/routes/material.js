const express=require('express');
const router=express.Router();
const material=require('../controllers/material');

router.get('/',material.material);
router.post('/insertar', material.insertar);
router.post('/actualizar', material.actualizar);
router.post('/eliminar', material.eliminar);

module.exports = router;