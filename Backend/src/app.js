const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth.routes"); // IMPORT THE ROUTER

const app = express();

app.use(express.json());
app.use(cors());

app.use("/test", (req, res, next) => {
    // This is a basic middleware example
    console.log("Middleware is executing first!");
    
    // Pass control to the final route handler
    next();
}, (req, res) => {
    res.send("Hello from the testing server after the middleware!");
});

// USE THE ROUTES FROM THE auth.routes.js file
app.use("/", authRouter);

app.get("/", (req, res) => {
    res.send("DevTinder is running an basic api for testing");
});

module.exports = app;