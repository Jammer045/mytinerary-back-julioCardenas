import { Router } from "express";
import routerUsers from "../controllers/readu.js";
import validator from "../middlewarses/Validator.js";
import emailExists from "../middlewarses/checkEmailExists.js";
import passport from '../middlewarses/passport.js';

const router = Router();

router.get("/countries", routerUsers);
router.get("/Allusers", 
    passport.authenticate('jwt', { session: false }), 
    routerUsers
);
router.get("/:id", 
    passport.authenticate('jwt', { session: false }), 
    routerUsers
);
router.post("/create", 
    validator,        // Valida campos requeridos
    emailExists,      // Verifica que el email no exista
    routerUsers
);
router.put("/update/:id", 
    passport.authenticate('jwt', { session: false }), 
    validator,        // Para validar los campos a actualizar
    routerUsers
);

router.delete("/delete/:id", 
    passport.authenticate('jwt', { session: false }), 
    routerUsers
);

export default router;