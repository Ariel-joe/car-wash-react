import { model, Schema } from "mongoose";

const customerSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
});

const Customer = new model("customer", customerSchema);

export { Customer };
