import { model, Schema } from "mongoose";

const vehicleSchema = new Schema({
  number_plate: { type: String, required: true },
  customer_id: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Complete"],
    default: "Pending",
  },
  detailer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Detailer" },
});
const Vehicle = new model("vehicle", vehicleSchema);

export { Vehicle };
