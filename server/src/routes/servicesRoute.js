import { Router } from "express";
import {
  getCompletedServices,
  getPendingServices,
} from "../controllers/Services.js";

const servicesRoute = Router();

servicesRoute
  .route("/services")
  .get(getPendingServices)
  .post(getCompletedServices);

export { servicesRoute };
