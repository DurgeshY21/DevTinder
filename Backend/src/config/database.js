// All Configuration like database and env etc

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb Connected Successfully!");
    } catch(error) {
        console.log("Database connection failed", error.message);
    }
};

module.exports = connectDB;