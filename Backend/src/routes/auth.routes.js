const express = require("express");
const { signupUser, loginUser } = require("../controllers/user.controllers");

const authRouter = express.Router();

// Define all authentication routes here
authRouter.post("/signup", signupUser);
authRouter.post("/login", loginUser);

// You can easily add more later:
// authRouter.post("/logout", logoutUser);

module.exports = authRouter;
