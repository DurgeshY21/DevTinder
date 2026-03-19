const express = require("express");
const { signupUser } = require("../controllers/user.controllers");

const authRouter = express.Router();

// Define all authentication routes here
authRouter.post("/signup", signupUser);

// You can easily add more later:
// authRouter.post("/login", loginUser);
// authRouter.post("/logout", logoutUser);

module.exports = authRouter;
