const express = require("express");
const userRouter = express.Router();

// Here you can define all routes related directly to user operations
// For example: getting a profile, updating a profile, deleting a profile

userRouter.get("/profile", (req, res) => {
    res.send("This is the user profile route!");
});

userRouter.put("/update", (req, res) => {
    res.send("This route would update the user profile");
});

module.exports = userRouter;
