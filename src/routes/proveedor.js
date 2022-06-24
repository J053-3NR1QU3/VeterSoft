const express=require('express');
const router=express.Router();
const proveedor=require('../controllers/proveedor');

router.get('/',proveedor.proveedor);
router.post('/insertar', proveedor.insertar);
router.post('/actualizar', proveedor.actualizar);
router.post('/eliminar', proveedor.eliminar);

module.exports = router;