import { Router } from "express";
import {
  addDetailer,
  assignDetailer,
//   assignDetailerToVehicle,
  getDetailers,
} from "../controllers/detailers.js";

const detailersRoute = Router();

detailersRoute.get("/detailers", getDetailers);

detailersRoute.post("/detailers/add", addDetailer);

detailersRoute.post("/detailers/assign", assignDetailer);

export { detailersRoute };
