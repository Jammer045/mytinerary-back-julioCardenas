import Router  from "express";
import { allcities, citiesId, citybyname, alltineraries, getItinerariesByCity } from "../controllers/read.js";
import { createItinerary, createCity } from "../controllers/create.js";
import { updateCity, updateItinerary } from "../controllers/update.js";
import {deleteCity, deleteItinerary} from "../controllers/delete.js";

const routers = Router();

routers.get("/all", allcities);
routers.get("/:id", citiesId);
routers.get("/name/:name", citybyname);
routers.get("/all/alltineraries", alltineraries);
routers.get("/city/:id/tineraries", getItinerariesByCity);
routers.post("/create", createCity);
routers.post("/createItinerary", createItinerary);
routers.put('/update/:id', updateCity);
routers.put('/updateItinerary/:id', updateItinerary);
routers.delete('/delete/:id', deleteCity);
routers.delete('/deleteItinerary/:id', deleteItinerary);


export default routers;