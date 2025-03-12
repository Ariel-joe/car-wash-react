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

vehiclesRoute.post("/vehicles", addVehicle);
vehiclesRoute.get("/vehicles/types", getVehicleTypes);
vehiclesRoute.get("/vehicles/:id", searchVehicle);
vehiclesRoute.post("/vehicles/types", vehicleTypefunc);

vehiclesRoute.put("/vehicles", updateVehicleStatus);

export { vehiclesRoute };
