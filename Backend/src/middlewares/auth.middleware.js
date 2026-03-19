const userAuth = (req, res, next) => {
    console.log("Auth middleware is checking credentials...");
    
    // In the future, you will verify the token from req.headers or req.cookies here
    const token = "dummy_token"; 
    const isAuthenticated = token === "dummy_token"; // Mock check

    if (!isAuthenticated) {
        // Stop the request here and send a 401 response if unauthenticated
        return res.status(401).json({ message: "Unauthorized Request" });
    }

    // If authenticated, we usually attach the user data to the request object
    // so the next route handler can use it
    req.user = { id: "123", name: "Durgesh" };

    // VERY IMPORTANT: Pass control to the next route handler or middleware
    next();
};

module.exports = {
    userAuth
};