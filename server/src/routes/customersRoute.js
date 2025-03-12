import { Router } from "express";
import {
  addCustomer,
  findCustomer,
  getCustomers,
  updateCustomer,
} from "../controllers/customers.js";

const customersRoute = Router();

customersRoute.get("/customers", getCustomers);
customersRoute.post("/customers/add", addCustomer);
customersRoute.patch("/customers", updateCustomer);
customersRoute.get("/customers/:id", findCustomer);

export { customersRoute };
