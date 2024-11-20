import { Router } from 'express';
import signIn from '../controllers/Auth/sigIn.js';
import signOut from '../controllers/Auth/sigout.js';
import findUser from '../middlewarses/findUser.js';
import isPasswordValid from '../middlewarses/passwordValidator.js';
import generateToken from '../middlewarses/generateToken.js';
import passport from '../middlewarses/passport.js';

const router = Router();

router.post('/signin', 
    findUser,           // Primero verificamos que exista el usuario
    isPasswordValid,    // Luego validamos la contraseña
    generateToken,      // Si todo esta bien, generamos un token
    signIn             // Finalmente, responde con el usuario y token
);

router.post('/signout',
    passport.authenticate('jwt', { session: false }),
    signOut
);

export default router;