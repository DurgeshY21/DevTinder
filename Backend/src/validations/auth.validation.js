const validator = require("validator");

const validateSignUpData = (req) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName) {
        throw new Error("Name is not valid");
    }

    if (!email || !validator.isEmail(email)) {
        throw new Error("Please enter a valid email address.");
    }

    if (!password || !validator.isStrongPassword(password)) {
        throw new Error("Please enter a strong password.");
    }
};

module.exports = {
    validateSignUpData
};