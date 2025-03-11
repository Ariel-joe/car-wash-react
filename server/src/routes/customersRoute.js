import { Router } from "express";
import {
  addCustomer,
  findCustomer,
  getCustomers,
  updateCustomer,
} from "../controllers/customers.js";

const customersRoute = Router();

customersRoute.get("/customers", getCustomers);
customersRoute.get("/customers", findCustomer);
customersRoute.post("/customers", addCustomer);
customersRoute.patch("/customers", updateCustomer);

export { customersRoute };
