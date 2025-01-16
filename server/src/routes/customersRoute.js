import { Router } from "express";
import {
  addCustomer,
  findCustomer,
  getCustomers,
  updateCustomer,
} from "../database/controllers/customers.js";

const customersRoute = Router();

customersRoute.get("/customers", getCustomers, findCustomer);
customersRoute.get("/customers/single", findCustomer);
customersRoute.post("/customers/add", addCustomer);
customersRoute.patch("/customers/update", updateCustomer);

export { customersRoute };
