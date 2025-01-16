import { model, Schema } from "mongoose";

const customerSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
});

const Customer = new model("customer", customerSchema);

export { Customer };
