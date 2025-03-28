import expresss from "express";
import "dotenv/config";
import cors from "cors";
import { connectDB } from "./database/config.js";
import { getHome } from "./controllers/home.js";
import { servicesRoute } from "./routes/servicesRoute.js";
import { detailersRoute } from "./routes/detailersRoute.js";
import { customersRoute } from "./routes/customersRoute.js";
import { paymentsRoute } from "./routes/paymentsRoute.js";
import { vehiclesRoute } from "./routes/vehiclesRoute.js";
import { serviceTypeRoute } from "./routes/servicetypesRoute.js";
import { userAuthentication } from "./middleware/auth/Auth.js";

const app = expresss();

app.use(expresss.json());

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

connectDB();

app.get("/", getHome);

app.use(
  "/api",
  userAuthentication,
  customersRoute,
  detailersRoute,
  paymentsRoute,
  servicesRoute,
  vehiclesRoute,
  serviceTypeRoute
);

app.listen(process.env.PORT, () => {
  console.log(`app listening on http://localhost:${process.env.PORT}`);
});
