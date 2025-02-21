import { model, Schema } from "mongoose";

const vehicleSchema = new Schema(
  {
    customer: { type: Schema.Types.ObjectId, ref: "customer" },
    vehicle_type: { type: Schema.Types.ObjectId, ref: "vehicleType" },
    number_plate: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Complete"],
      default: "Pending",
    },
  },
  { 
    timestamps: true,
  }
);
const Vehicle = new model("vehicle", vehicleSchema);

export { Vehicle };
