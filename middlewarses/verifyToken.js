import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
        
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Access denied. No token provided"
            });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({
                    success: false,
                    message: "Invalid token"
                });
            }
            
            req.user = decoded; // Pasamos la información decodificada
            next();
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error verifying token",
            error: error.message
        });
    }
};

export default verifyToken;