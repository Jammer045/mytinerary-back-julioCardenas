import { Router } from 'express';
import signIn from '../controllers/Auth/sigIn.js';
import signOut from '../controllers/Auth/sigout.js';
import verifyUser from '../middlewarses/verifyUser.js';
import findUser from '../middlewarses/findUser.js';
import isPasswordValid from '../middlewarses/passwordValidator.js';
import generateToken from '../middlewarses/generateToken.js';
import passport from '../middlewarses/passport.js';
import googleSignIn from '../controllers/Auth/signin-Google.js';
import passportGoogle from '../middlewarses/passportGoogle.js';
import handleGoogleAuthCallback from '../middlewarses/googlereturn.js';

const router = Router();

router.post('/signin', 
    findUser,
    isPasswordValid,
    generateToken,
    signIn
);

router.post('/signout',
    passport.authenticate('jwt', { session: false }),
    signOut
);

router.get('/verify-token',
    passport.authenticate('jwt', { session: false }),
    verifyUser
);

router.get('/signin/google', 
    passportGoogle.authenticate('google', { scope: ['profile', 'email'], session: false }), 
    googleSignIn
);

router.get('/signin/google/callback', 
    passportGoogle.authenticate('google', { 
        session: false,
        failureRedirect: 'http://localhost:5173/signin' 
    }), 
    generateToken,
    handleGoogleAuthCallback  
);

export default router;