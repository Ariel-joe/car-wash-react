import { Router } from "express";
import { getVehicles } from "../controllers/vehicles.js";

const vehiclesRoute = Router();

vehiclesRoute.get("/vehicles", getVehicles);

export { vehiclesRoute };
