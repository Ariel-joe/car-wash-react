import { Router } from "express";
import { getDetailers } from "../database/controllers/detailers.js";

const detailersRoute = Router();

detailersRoute.get("/detailers", getDetailers);

export { detailersRoute };
