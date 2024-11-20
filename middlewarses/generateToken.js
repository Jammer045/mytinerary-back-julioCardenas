import jwt from 'jsonwebtoken';

const generateToken = async (req, res, next) => {
    try {
        const { user } = req;

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        req.token = token; // Pasamos el token al siguiente middleware
        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error generating token",
            error: error.message
        });
    }
};

export default generateToken;