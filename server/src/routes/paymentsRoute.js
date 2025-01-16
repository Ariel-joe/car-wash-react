import { Router } from "express";
import { getPayments } from "../database/controllers/payments.js";

const paymentsRoute = Router();

paymentsRoute.get("/payments", getPayments);

export { paymentsRoute };
