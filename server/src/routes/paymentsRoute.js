import { Router } from "express";
import { getPayments } from "../controllers/payments.js";

const paymentsRoute = Router();

paymentsRoute.get("/payments", getPayments);

export { paymentsRoute };
