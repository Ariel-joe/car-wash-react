import { model, Schema } from "mongoose";

const serviceTypeSchema = new Schema(
  {
    vehicle_type: { type: Schema.Types.ObjectId, ref: "vehicleType" },
    service: { type: Schema.Types.ObjectId, ref: "service" },
    price: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ServiceType = model("serviceType", serviceTypeSchema);

export { ServiceType };
