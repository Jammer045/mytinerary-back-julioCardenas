import City from "../models/City.js";
import Itinerary from "../models/Mytinerary.js";

let createCity = async (req, res) => {
    try {
        const city = new City(req.body);
        const newCity = await city.save();
        return res.status(201).json({
          response: newCity,
          success: true
        });
      } catch (error) {
        return res.status(500).json({
          message: 'Error creating city',
          success: false,
          error: error.message
        });
      }
}

let createItinerary = async (req, res) => {
    try {
        const itinerary = new Itinerary(req.body);
        const newItinerary = await itinerary.save();
        return res.status(201).json({
          response: newItinerary,
          success: true
        });
      } catch (error) {
        return res.status(500).json({
          message: 'Error creating itinerary',
          success: false,
          error: error.message
        });
      }
}

export { createCity, createItinerary };