import express from "express";
import { 
    register, 
    login, 
    logout } from "../controllers/userController";

const userRoute = express.Router();

userRoute.use("/register", register);
userRoute.use("login", login);
userRoute.use("/logout", logout);

export default userRoute;