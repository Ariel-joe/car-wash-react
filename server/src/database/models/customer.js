import { model, Schema } from "mongoose";

const customerSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    numberPlate: { type: String, required: true },
    vehicleType: { type: Schema.Types.ObjectId, ref: "VehicleType" },
    detailer: { type: Schema.Types.ObjectId, ref: "Detailer" },
    service: { type: Schema.Types.ObjectId, ref: "Service" },
    amount: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Customer = new model("customer", customerSchema);

export { Customer };
