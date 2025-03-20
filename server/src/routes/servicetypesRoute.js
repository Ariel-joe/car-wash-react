import { Router } from "express";
import { addServiceType, getServiceType } from "../controllers/serviceTypes.js";

const serviceTypeRoute = Router();

serviceTypeRoute.post("/servicetypes", addServiceType);
serviceTypeRoute.get("/servicetypes", getServiceType)

export { serviceTypeRoute };
