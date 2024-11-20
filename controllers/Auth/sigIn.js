import User from '../../models/User.js';

const signIn = async (req, res) => {
    try {
        const { user, token } = req;
        
        const updatedUser = await User.findByIdAndUpdate(
            user._id,
            { verified: true },
            { new: true }  
        ).select('-password');
        
        res.json({
            success: true,
            message: "Login successful",
            response: {
                token,
                user: {
                    id: updatedUser._id,
                    name: updatedUser.name,
                    email: updatedUser.email,
                    photo: updatedUser.photo,
                    verified: updatedUser.verified
                }
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in signIn controller",
            error: error.message
        });
    }
};

export default signIn;