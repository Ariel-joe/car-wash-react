import { model, Schema } from "mongoose";

const customerSchema = new Schema({
  name: { type: String, required: true },
  vehicle: { type: String, required: true },
  phone: { type: Number, required: true },
  service:{type: Schema.Types.ObjectId, ref: "Service"},
  detailer:{type: Schema.Types.ObjectId, ref: "Detailer"}
});

const Customer = new model("customer", customerSchema);

export { Customer };
