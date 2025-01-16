import { Router } from "express";
import { getPayments } from "../database/controllers/payments";

const paymentsRoute = Router();

paymentsRoute.get("/payments", getPayments);

export { paymentsRoute };
