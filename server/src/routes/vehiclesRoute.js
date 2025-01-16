import { Router } from "express";
import { getVehicles } from "../database/controllers/vehicles";

const vehiclesRoute = Router();

vehiclesRoute.get("/vehicles", getVehicles);

export { vehiclesRoute };
