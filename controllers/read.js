import City from "../models/City.js";

let allcities = async (req, res) => {
    try {
        const all = await City.find();
        return res.status(200).json({response:all});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

let alldestinations = async (req, res) => {
    try {
        const all = await Destination.find();
        return res.status(200).json({response:all});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

let citiesId = async (req, res) => {
    try {
        const cityId = req.params.id;
        const city = await City.findById(cityId);
    
        if (!city) {
          return res.status(404).json({ 
            message: 'City not found',
            success: false 
          });
        }
    
        return res.status(200).json({
          response: city,
          success: true
        });
      } catch (error) {
        return res.status(500).json({
          message: 'Error retrieving city',
          success: false,
          error: error.message
        });
      }
    }

let citybyname = async (req, res) => {
    try {
        const cityname = req.params.name;
        const city = await City.findOne({title: cityname});
    
        if (!city) {
          return res.status(404).json({ 
            message: 'City not found',
            success: false 
          });
        }
    
        return res.status(200).json({
          response: city,
          success: true
        });
      } catch (error) {
        return res.status(500).json({
          message: 'Error retrieving city',
          success: false,
          error: error.message
        });
      }
}

export { allcities, alldestinations, citiesId, citybyname }