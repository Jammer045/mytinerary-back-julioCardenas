import User from '../models/User.js';

const findUser = async (req, res, next) => {
    try {
        const { email } = req.body;
        
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error finding user",
            error: error.message
        });
    }
};

export default findUser;