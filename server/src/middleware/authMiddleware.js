import jwt from "jsonwebtoken";
import User from "../models/user.js";

// Middleware to protect routes
const protectRoute = async (req, res, next) => {
  try {
    // Token from cookies
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized. Please login." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //  Fetch user from DB
    const user = await User.findById(decoded.userId).select("email");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Attach user to request
    req.user = {
      userId: decoded.userId,
      email: user.email,
    };

    next(); //  Continue to route
  } catch (error) {
    console.error("JWT auth error:", error.message);
    return res
      .status(401)
      .json({ message: "Invalid token, please login again." });
  }
};

export { protectRoute };
