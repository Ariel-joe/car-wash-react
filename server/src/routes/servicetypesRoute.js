import { Router } from "express";
import { addServiceType } from "../controllers/serviceTypes.js";

const serviceTypeRoute = Router();

serviceTypeRoute.post("/servicetypes/add", addServiceType);

export { serviceTypeRoute };
