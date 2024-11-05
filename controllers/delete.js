import City from "../models/City.js";
import Itinerary from "../models/Mytinerary.js";

let deleteCity = async (req, res) => {
    try {
        const { id } = req.params;

        const cityToDelete = await City.findByIdAndDelete(id);

        if (!cityToDelete) {
            return res.status(404).json({
                message: 'City not found',
                success: false
            });
        }

        return res.status(200).json({
            message: 'City deleted successfully',
            success: true,
            response: cityToDelete
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Error deleting city',
            success: false,
            error: error.message
        });
    }
}

let deleteItinerary = async (req, res) => {
    try {
        const { id } = req.params;

        const itineraryToDelete = await Itinerary.findByIdAndDelete(id);

        if (!itineraryToDelete) {
            return res.status(404).json({   
                message: 'Itinerary not found',
                success: false
            });
        }

        return res.status(200).json({
            message: 'Itinerary deleted successfully',
            success: true,
            response: itineraryToDelete
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Error deleting itinerary',
            success: false,
            error: error.message
        });
    }
}

export { deleteCity, deleteItinerary};