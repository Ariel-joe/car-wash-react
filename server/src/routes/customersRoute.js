import { Router } from "express";
import { getCustomers } from "../database/controllers/customers.js";

const customersRoute = Router();

customersRoute.get("/customers", getCustomers);

export { customersRoute };
