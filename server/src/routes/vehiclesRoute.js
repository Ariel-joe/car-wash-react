import { Router } from "express";
import { addVehicles, getVehicles } from "../controllers/vehicles.js";

const vehiclesRoute = Router();

vehiclesRoute.route("/vehicles").get(getVehicles).post(addVehicles)


export { vehiclesRoute };
