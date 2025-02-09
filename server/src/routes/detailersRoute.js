import { Router } from "express";
import { addDetailer, getDetailers } from "../controllers/detailers.js";

const detailersRoute = Router();

detailersRoute.get("/detailers", getDetailers);

detailersRoute.post("/detailers/add", addDetailer);

export { detailersRoute };
