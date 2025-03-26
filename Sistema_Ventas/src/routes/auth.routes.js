import { Router } from 'express';
import { check } from 'express-validator';
import { login } from '../controllers/auth.controller.js';
import { validarCampos } from "../middlewares/validar-campos.js"

const router = Router();

router.post('/login', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validarCampos
], login);

//router.post("/logout", )


export default router;