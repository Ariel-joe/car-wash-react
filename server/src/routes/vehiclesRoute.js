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
vehiclesRoute.get("/vehicles/search", searchVehicle);

vehiclesRoute.post("/vehicles/add", addVehicle);
vehiclesRoute.get("/vehicles/types", getVehicleTypes);
vehiclesRoute.post("/vehicles/types/add", vehicleTypefunc);

vehiclesRoute.put("/vehicles/update", updateVehicleStatus)

export { vehiclesRoute };
