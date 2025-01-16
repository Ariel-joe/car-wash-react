import { Router } from "express";
import { getPendingServices } from "../database/controllers/pServices.js";
import { getCompletedServices } from "../database/controllers/cServices.js";

const servicesRoute = Router();

servicesRoute.route("/services").get(getPendingServices).post(getCompletedServices);

export { servicesRoute };
 