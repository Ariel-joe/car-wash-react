import { Router } from "express";
import { addService, getServices } from "../controllers/Services.js";

const servicesRoute = Router();

servicesRoute.post("/services/add", addService);

servicesRoute.get("/services", getServices)

export { servicesRoute };
