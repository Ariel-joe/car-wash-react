import { model, Schema } from "mongoose";

const paymentSchema = new Schema({
  service_id: {
    type: Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  },
  amount: { type: Number, required: true },
  method: { type: String, enum: ["Cash", "Mpesa"], required: true },
});

const Payment = new model("payment", paymentSchema);

export { Payment };
