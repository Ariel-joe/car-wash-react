import { model, Schema } from "mongoose";

const serviceSchema = new Schema(
  {
    status: {
      type: String,
      enum: ["available", "not available"],
      default: "available",
    },
    service: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Service = new model("service", serviceSchema);

export { Service };
