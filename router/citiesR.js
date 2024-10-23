import { response, Router } from "express";
import { allcities, alldestinations, citiesId, citybyname } from "../controllers/read.js";
import createCity from "../controllers/create.js";
import updateCity from "../controllers/update.js";
import deleteCity from "../controllers/delete.js";

const routers = Router();

routers.get("/all", allcities);
routers.get("/:id", citiesId);
routers.get("/name/:name", citybyname);
routers.post("/create", createCity);
routers.put('/update/:id', updateCity);
routers.delete('/delete/:id', deleteCity);

export default routers;