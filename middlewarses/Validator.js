import joi from 'joi';

const userSchema = joi.object({
    name: joi.string()
        .min(3)
        .required()
        .messages({
            'string.min': 'Name must be at least 3 characters long',
            'string.empty': 'Name is required',
            'any.required': 'Name is required'
        }),
    
    lastName: joi.string()
        .required()
        .messages({
            'string.empty': 'Last name is required',
            'any.required': 'Last name is required'
        }),
    
    email: joi.string()
        .min(5)
        .required()
        .email()
        .messages({
            'string.min': 'Email must be at least 5 characters long',
            'string.email': 'Invalid email format',
            'string.empty': 'Email is required',
            'any.required': 'Email is required'
        }),
    
    password: joi.string()
        .min(6)
        .required()
        .messages({
            'string.min': 'Password must be at least 6 characters long',
            'string.empty': 'Password is required',
            'any.required': 'Password is required'
        }),
    
    photo: joi.string()
        .required()
        .messages({
            'string.empty': 'Photo URL is required',
            'any.required': 'Photo URL is required'
        }),
    
    country: joi.string()
        .required()
        .messages({
            'string.empty': 'Country is required',
            'any.required': 'Country is required'
        })
});

const validator = (req, res, next) => {
    const validation = userSchema.validate(req.body, { abortEarly: false });

    if (validation.error) {
        return res.status(400).json({
            success: false,
            message: "Validation error",
            response: validation.error.details.map(error => ({
                field: error.path[0],
                message: error.message
            }))
        });
    }

    next();
};

export default validator;