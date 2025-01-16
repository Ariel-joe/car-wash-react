import { Router } from "express";
import {
  addCustomer,
  findCustomer,
  getCustomers,
} from "../database/controllers/customers.js";

const customersRoute = Router();

customersRoute.get("/customers", getCustomers, findCustomer);
customersRoute.post("/customers/add", addCustomer);

export { customersRoute };
