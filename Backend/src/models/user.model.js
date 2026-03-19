const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 50,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            min: 18,
        },
        gender: {
            type: String,
            enum: ["male", "female", "other"],
        },
        photoUrl: {
            type: String,
            default: "https://geographyandyou.com/images/user-profile.png",
        },
        about: {
            type: String,
            default: "This is a default about of the user!",
        },
        skills: {
            type: [String],
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

// We export the model so we can use it in our routes/controllers
// The first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name (i.e 'users')
const User = mongoose.model("User", userSchema);

module.exports = User;
