import City from "../models/City.js";

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

export default updateCity;