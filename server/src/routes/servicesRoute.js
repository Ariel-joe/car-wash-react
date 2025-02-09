import { Router } from "express";
import { addService } from "../controllers/Services.js";

const servicesRoute = Router();

servicesRoute.post("/services/add", addService);

export { servicesRoute };
