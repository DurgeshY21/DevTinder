require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/database");

const PORT = process.env.PORT || 5000;

// CONNECT TO THE DATABASE AND THEN START THE SERVER
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on the port ${PORT}`);
    });
});
