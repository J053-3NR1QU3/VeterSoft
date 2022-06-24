const express=require('express');
const router=express.Router();
const usuario=require('../controllers/usuario');

router.get('/', usuario.signin);
router.get('/usuario', usuario.usuario);
router.post('/signin', usuario.signinP);
router.post('/signup', usuario.signupP);
router.post('/actualizar', usuario.actualizar);
router.post('/eliminar', usuario.eliminar);

module.exports = router;