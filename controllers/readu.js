import { Router } from "express";
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const router = Router();

router.get('/Allusers', async (req, res) => {
    try {
        const users = await User.find();
        res.json({
            success: true,
            response: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching users",
            error: error.message
        });
    }
});

router.get('/countries', async (req, res) => {
    try {
        const users = await User.find();
        const countries = [...new Set(users.map(user => user.country))].sort();
        res.json({
            success: true,
            response: countries
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching countries",
            error: error.message
        });
    }
});

router.post('/create', async (req, res) => {
    try {
        const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new User({
            ...req.body,
            password: hashedPassword,
            google: false,
            verified: false
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            response: {
                id: newUser._id,
                name: newUser.name,
                lastName: newUser.lastName,
                email: newUser.email,
                country: newUser.country,
                photo: newUser.photo
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating user",
            error: error.message
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.json({
            success: true,
            response: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching user",
            error: error.message
        });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.json({
            success: true,
            response: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating user",
            error: error.message
        });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.json({
            success: true,
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting user",
            error: error.message
        });
    }
});

export default router;