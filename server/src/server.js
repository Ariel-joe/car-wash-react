import expresss from "express";
import "dotenv/config";
import { connectDB } from "./database/config.js";
import { getHome } from "./database/controllers/home.js";
import { servicesRoute } from "./routes/servicesRoute.js";
import { detailersRoute } from "./routes/detailersRoute.js";
import { customersRoute } from "./routes/customersRoute.js";

const app = expresss();

app.use(expresss.json());
connectDB();

app.get("/", getHome);

app.use("/api", customersRoute, detailersRoute, servicesRoute);

app.listen(process.env.PORT, () => {
  console.log(`app listening on http://localhost:${process.env.PORT}`);
});
