import { model, Schema } from "mongoose";

const serviceSchema = new Schema({
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  },
  service: { type: String, required: true },
  detailer: {
    type: Schema.Types.ObjectId,
    ref: "Detailer",
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Complete"],
    default: "Pending",
  },
  price: { type: Number, required: true },
  payment: { type: Schema.Types.ObjectId, ref: "Payment" },
});

const Service = new model("service", serviceSchema);

export { Service };
