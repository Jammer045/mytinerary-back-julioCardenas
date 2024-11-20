import User from '../models/User.js';

const emailExists = async (req, res, next) => {
    try {
        const { email } = req.body;
        
        const existingUser = await User.findOne({ email: email });
        
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email validation error",
                response: "Email already registered"
            });
        }
        
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error checking email",
            response: error.message
        });
    }
};

export default emailExists;