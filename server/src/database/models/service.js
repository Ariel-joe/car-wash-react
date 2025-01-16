import { model, Schema } from "mongoose";

const serviceSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const Service = new model("service", serviceSchema);

export { Service };
