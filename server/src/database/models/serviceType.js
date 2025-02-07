import { model, Schema } from "mongoose";

const serviceTypeSchema = new Schema(
  {
    vehicle_type: { type: Schema.Types.ObjectId, ref: "Vehicle_type" },
    service: { type: Schema.Types.ObjectId, ref: "Service" },
    price: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Service_type = model("serviceType", serviceTypeSchema);

export { Service_type };
