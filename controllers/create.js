import City from "../models/City.js";

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

export default createCity