import { Router } from "express";
import {
  addDetailer,
  assignDetailer,
//   assignDetailerToVehicle,
  getDetailers,
  updateDetailer,
} from "../controllers/detailers.js";

const detailersRoute = Router();

detailersRoute.get("/detailers", getDetailers);

detailersRoute.post("/detailers", addDetailer);

detailersRoute.post("/detailers", assignDetailer);

detailersRoute.patch("/detailers/:id", updateDetailer)

export { detailersRoute };
