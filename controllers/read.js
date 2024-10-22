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

export { allcities, alldestinations }