import { Router } from 'express';
import { check } from 'express-validator';
import { login } from '../controllers/auth.controller.js';
//const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/login', login);


export default router;