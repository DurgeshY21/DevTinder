const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { validateSignUpData } = require("../validations/auth.validation");

const signupUser = async (req, res) => {
    try {
        // Validate the request data
        validateSignUpData(req);

        // Extract the data from the incoming request body
        const { firstName, lastName, email, password, age, gender } = req.body;

        // Security Check: Hash the password using bcryptjs
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new instance of the User model
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            age,
            gender
        });

        // Save the user to the MongoDB database
        await user.save();

        // Send a success response back to Postman/Frontend
        res.status(201).json({ message: "User Created Successfully!" });
    } catch (err) {
        // Handle duplicate key error (MongoDB error code 11000)
        if (err.code === 11000) {
            return res.status(400).json({ error: "Email is already registered. Please login instead!" });
        }

        // Catch validation errors
        console.error("Signup Error:", err.message);
        res.status(400).json({ error: "ERROR: " + err.message });
    }
};

module.exports = {
    signupUser
};
