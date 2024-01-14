const userModel = require("../model/userModel");

const userGet =async (req, res) => {
    try {
        const data = await userModel.find(); 
        res.status(200).json({
            success: true,
            data: data,
            message: "Data Get Successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const userPost =async (req, res) => {
    try {
        const {userName,email,password,age,status}=req.body;
        const data = await userModel.create({userName,email,password,age,status});
        res.status(201).json({
            success: true,
            data: data,
            message: "Data Get Successfully"
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Duplicate email. Please use a different email address."
            });
        }
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                errors: validationErrors,
            });
        }
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const userDelete = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Data Deleted Successfully"
    });
};
const userUpdate = async (req, res) => {
    try {
        const userId = req.params.userId;
        const updateFields = req.body; 

        // Find the user by _id
        const existingUser = await userModel.findById(userId);
        console.log(userId,"existingUser",existingUser)

        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Update each field that is provided in the request
        Object.keys(updateFields).forEach((field) => {
            if (updateFields[field] !== undefined && updateFields[field] !== "") {
                existingUser[field] = updateFields[field];
            }
        });

        // Save the updated user
        const updatedUser = await existingUser.save();

        res.status(200).json({
            success: true,
            data: updatedUser,
            message: "User Updated Successfully"
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            // Handle validation errors
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                errors: validationErrors,
            });
        }

        console.error(error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


module.exports = {
    userGet,
    userPost,
    userDelete,
    userUpdate
};
