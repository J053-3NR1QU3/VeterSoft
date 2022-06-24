const express=require('express');
const router=express.Router();
const cliente=require('../controllers/cliente');

router.get('/', cliente.cliente);
router.post('/insertar', cliente.insertar);
router.post('/actualizar', cliente.actualizar);
router.post('/eliminar', cliente.eliminar);

module.exports = router;