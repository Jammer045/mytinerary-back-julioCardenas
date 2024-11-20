import User from '../../models/User.js';

const signOut = async (req, res) => {
    try {
        const { id } = req.user;
      
        await User.findByIdAndUpdate(
            id,
            { verified: false }
        );
        
        res.json({
            success: true,
            message: "Logout successful"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in signOut controller",
            error: error.message
        });
    }
};

export default signOut;