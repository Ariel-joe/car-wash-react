import { Router } from "express";
import {
  addVehicle,
  getVehicles,
  searchVehicle,
  updateVehicleStatus,
} from "../controllers/vehicles.js";
import {
  getVehicleTypes,
  vehicleTypefunc,
} from "../controllers/vehicleTypes.js";

const vehiclesRoute = Router();

vehiclesRoute.get("/vehicles", getVehicles);
vehiclesRoute.get("/vehicles", searchVehicle);

vehiclesRoute.post("/vehicles", addVehicle);
vehiclesRoute.get("/vehicles", getVehicleTypes);
vehiclesRoute.post("/vehicles", vehicleTypefunc);

vehiclesRoute.put("/vehicles", updateVehicleStatus);

export { vehiclesRoute };
