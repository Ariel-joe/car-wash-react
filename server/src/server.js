import expresss from "express";
import "dotenv/config";
import { connectDB } from "./database/config.js";

const app = expresss();

app.use(expresss.json());
connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "this is the home route",
  });
});

app.get("/pending", (req, res) => {
  res.json({
    message: "this is the pending route",
  });
});

app.get("/completed", (req, res) => {
    res.json({
        message: "this is the completed route"
    })
})

app.get("/detailers", (req, res) => {
    res.json({
        message: "this are the availalbe detailers"
    })
})

app.get("/customers", (req, res) => {
    res.json({
        message: " this are all your customers"
    })
})

app.listen(process.env.PORT, () => {
  console.log(`app listening on http://localhost:${process.env.PORT}`);
});
