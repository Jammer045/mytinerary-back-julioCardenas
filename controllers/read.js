import City from "../models/City.js";
import Itinerary from "../models/Mytinerary.js";

let allcities = async (req, res) => {
    try {
      let {title, id} = req.query;
      let query= {}
      console.log(title, id);
      if (title) {
        query.title = {$regex: '^'+title, $options: "i"};}
        const all = await City.find(query);
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

let alltineraries = async (req, res) => {
    try {
        const all = await Itinerary.find();
        return res.status(200).json({response:all});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

let getItinerariesByCity = async (req, res) => {
  try {
      const  cityId = req.params.id;
      const itineraries = await Itinerary.find({ city: cityId });
      return res.status(200).json({
          response: itineraries
      });
  } catch (error) {
      return res.status(500).json({
          message: error.message
      });
  }
};

export { allcities, alldestinations, citiesId, citybyname, alltineraries, getItinerariesByCity };