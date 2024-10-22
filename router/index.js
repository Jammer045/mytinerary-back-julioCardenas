import { Router } from "express";
import routers from "./citiesR.js";

const router = Router();

router.use("/cities", routers);

export default router;