import { Router } from "express";
import { addDetailer, assignDetailerToVehicle, getDetailers } from "../controllers/detailers.js";

const detailersRoute = Router();

detailersRoute.get("/detailers", getDetailers);

detailersRoute.post("/detailers/add", addDetailer);

detailersRoute.post("/detailers/assign", assignDetailerToVehicle)

export { detailersRoute };
