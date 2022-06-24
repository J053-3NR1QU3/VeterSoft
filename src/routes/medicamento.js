const express=require('express');
const router=express.Router();
const medicamento=require('../controllers/medicamento');

router.get('/',medicamento.medicamento);
router.post('/insertar', medicamento.insertar);
router.post('/actualizar', medicamento.actualizar);
router.post('/eliminar', medicamento.eliminar);

module.exports = router;