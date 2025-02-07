import { model, Schema } from "mongoose";

const serviceSchema = new Schema({
  status: { enum: ["available", "not available"], default: "available" },
  service: {enum: [""]},
});

const Service = new model("service", serviceSchema);

export { Service };
