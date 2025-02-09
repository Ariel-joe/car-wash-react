import { Router } from "express";
import {
  addVehicle,
  getVehicles,
  searchVehicle,
} from "../controllers/vehicles.js";
import { vehicleTypefunc } from "../controllers/vehicleTypes.js";

const vehiclesRoute = Router();

vehiclesRoute.get("/vehicles", getVehicles);
vehiclesRoute.get("/vehicles/search", searchVehicle);

vehiclesRoute.post("/vehicles/add", addVehicle);
vehiclesRoute.post("/vehicles/types/add", vehicleTypefunc);

export { vehiclesRoute };
