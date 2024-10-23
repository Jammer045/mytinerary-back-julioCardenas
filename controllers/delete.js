import City from "../models/City.js";

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

export default deleteCity;