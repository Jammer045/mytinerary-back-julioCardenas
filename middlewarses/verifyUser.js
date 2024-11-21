import User from '../models/User.js';

const verifyUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.json({
            success: true,
            response: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    photo: user.photo
                }
            }
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            success: false,
            message: "Error fetching user data",
            error: error.message
        });
    }
};

export default verifyUser;