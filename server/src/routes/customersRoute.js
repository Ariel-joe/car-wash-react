import { Router } from "express";
import {
  addCustomer,
  findCustomer,
  getCustomers,
  updateCustomer,
} from "../controllers/customers.js";

const customersRoute = Router();

customersRoute.get("/customers", getCustomers);
customersRoute.get("/customers/single", findCustomer);
customersRoute.post("/customers/add", addCustomer);
customersRoute.patch("/customers/update", updateCustomer);

export { customersRoute };
