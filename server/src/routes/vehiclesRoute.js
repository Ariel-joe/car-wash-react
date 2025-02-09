import { Router } from "express";
import { addVehicle, getVehicles } from "../controllers/vehicles.js";
import { vehicleTypefunc } from "../controllers/vehicleTypes.js";

const vehiclesRoute = Router();

vehiclesRoute.get("/vehicles", getVehicles);

vehiclesRoute.post("/vehicles/add", addVehicle);
vehiclesRoute.post("/vehicles/types/add", vehicleTypefunc);

export { vehiclesRoute };
