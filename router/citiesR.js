import { response, Router } from "express";
import { allcities, alldestinations, citiesId } from "../controllers/read.js";
import createCity from "../controllers/create.js";

const routers = Router();

routers.get("/all", allcities);
routers.get("/:id", citiesId);
routers.post("/create", createCity);

export default routers;