import { model, Schema } from "mongoose";

const detailerSchema = new Schema(
  {
    name: { type: String, required: true },
    phone_number: { type: String, required: true },
    status: { type: String,
      enum: ["Available", "Busy"],
      default: "Available",
    },
  },
  {
    timestamps: true,
  }
);

const Detailer = new model("detailer", detailerSchema);

export { Detailer };
