import { model, Schema } from "mongoose";

const detailerSchema = new Schema(
  {
    name: { type: String, required: true },
    phone_number: { type: String, required: true },
    activity: {type: String, enum: ["active", "dormant", "inactive"], default: "active"},
    status: { type: String, enum: ["available", "busy"], default: "available" },
  },
  {
    timestamps: true,
  }  
);

const Detailer = new model("detailer", detailerSchema);

export { Detailer };
