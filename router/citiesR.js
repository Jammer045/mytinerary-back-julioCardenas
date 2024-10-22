import { response, Router } from "express";
import  City from "../models/City.js";

const routers = Router();

routers.get("/all", async (req, res) => {
    try {
        const all = await City.find();
        return res.status(200).json({response:all});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

export default routers;