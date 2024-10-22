import { response, Router } from "express";
import { allcities, alldestinations } from "../controllers/read.js";
import router from "./index.js";

const routers = Router();

routers.get("/all", allcities);
routers.get("/alldestinations", alldestinations);

export default routers;