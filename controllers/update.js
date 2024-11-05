import City from "../models/City.js";
import Itinerary from "../models/Mytinerary.js";

let updateCity = async (req, res) => {
    try {
        const { id } = req.params; 
        const cityData = req.body; 

        const updatedCity = await City.findByIdAndUpdate(
            id,
            cityData,
            { new: true }
        );

        if (!updatedCity) {
            return res.status(404).json({
                message: 'City not found',
                success: false
            });
        }

        return res.status(200).json({
            response: updatedCity,
            success: true
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Error updating city',
            success: false,
            error: error.message
        });
    }
}

const updateItinerary = async (req, res) => {
    try {
        const { id } = req.params; 
        const itineraryData = req.body; 

        const updatedItinerary = await Itinerary.findByIdAndUpdate(
            id,
            itineraryData,
            { new: true }
        );

        if (!updatedItinerary) {
            return res.status(404).json({
                message: 'Itinerary not found',
                success: false
            });
        }

        return res.status(200).json({
            response: updatedItinerary,
            success: true
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Error updating itinerary',
            success: false,
            error: error.message
        });
    }
}

export { updateCity, updateItinerary };