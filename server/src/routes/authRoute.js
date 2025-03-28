import { Router } from "express";
import { login, signup } from "../controllers/auth.js";

const userRoute = Router();
userRoute.post("/auth/signup", signup);
userRoute.post("/auth/login", login);

export { userRoute };
