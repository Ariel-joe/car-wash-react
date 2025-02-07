import { model, Schema } from "mongoose";

const serviceSchema = new Schema(
  {
    status: { enum: ["available", "not available"], default: "available" },
    service: {
      type: String,
      enum: [
        "auto-wash",
        "inner-only",
        "outer-only",
        "engine-steaming",
        "waxing",
        "buffing",
      ],
      default: "auto-wash",
    },
  },
  {
    timestamps: true,
  }
);

const Service = new model("service", serviceSchema);

export { Service };
