import { Router } from "express";
import citiesRouter from "./citiesR.js";
import usersRouter from "./usersR.js";
import authRouter from "./authR.js";

const router = Router();

router.use("/cities", citiesRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);

export default router;