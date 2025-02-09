import { model, Schema } from "mongoose";

const vehicleTypeSchema = new Schema(
  {
    status: {
      type: String,
      enum: ["not available", "available"],
      default: "available",
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const VehicleType = model("vehicleType", vehicleTypeSchema);

export { VehicleType };
