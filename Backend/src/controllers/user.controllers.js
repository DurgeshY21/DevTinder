const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { validateSignUpData, validateLoginData } = require("../validations/auth.validation");

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

const loginUser = async (req, res) => {
    try {
        // Validate the request data
        validateLoginData(req);

        const { email, password } = req.body;

        // Find the user in the DB by email
        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
            // Use a generic message to avoid exposing whether email exists
            return res.status(401).json({ error: "Invalid email or password." });
        }

        // Compare the provided password with the hashed password stored in DB
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password." });
        }

        // Login successful — return user info (never return the password!)
        res.status(200).json({
            message: "Login successful!",
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                age: user.age,
                gender: user.gender,
                photoUrl: user.photoUrl,
                about: user.about,
                skills: user.skills,
            }
        });
    } catch (err) {
        console.error("Login Error:", err.message);
        res.status(400).json({ error: "ERROR: " + err.message });
    }
};

module.exports = {
    signupUser,
    loginUser
};
