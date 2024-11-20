import bcrypt from 'bcrypt';

const isPasswordValid = async (req, res, next) => {
    try {
        const { password } = req.body;
        const { user } = req; // Usuario encontrado en middleware anterior

        const isValid = await bcrypt.compare(password, user.password);
        
        if (!isValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        if (isValid){
            delete user.password
            return next();
        }
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error validating credentials",
            error: error.message
        });
    }
};

export default isPasswordValid;