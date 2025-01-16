import expresss from "express";
import "dotenv/config";
import { connectDB } from "./database/config.js";
import { getDetailers } from "./database/controllers/detailers.js";
import { getPendingServices } from "./database/controllers/pServices.js";
import { getHome } from "./database/controllers/home.js";
import { getCompletedServices } from "./database/controllers/cServices.js";
import { getCustomers } from "./database/controllers/customers.js";

const app = expresss();

app.use(expresss.json());
connectDB();

app.get("/", getHome);

app.get("/pending", getPendingServices);

app.get("/completed", getCompletedServices)

app.get("/detailers", getDetailers)

app.get("/customers", getCustomers)

app.listen(process.env.PORT, () => {
  console.log(`app listening on http://localhost:${process.env.PORT}`);
});
