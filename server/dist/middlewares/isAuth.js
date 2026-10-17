import jwt from "jsonwebtoken";
import User from "../models/User.js";
export const isAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({
                message: "Please Login",
            });
            return;
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            res.status(401).json({
                message: "Token Missing",
            });
            return;
        }
        const decodedData = jwt.verify(token, process.env.JWT_SEC);
        if (!decodedData || !decodedData._id) {
            res.status(401).json({
                message: "Invalid token",
            });
            return;
        }
        const user = await User.findById(decodedData._id);
        if (!user) {
            res.status(401).json({
                message: "expired token",
            });
            return;
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
