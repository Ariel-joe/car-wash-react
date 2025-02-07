import { model, Schema } from "mongoose";

const vehicleTypeSchema = new Schema(
  {
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Complete"],
      default: "Pending",
    },
    type: {
      type: String,
      enum: [
        "sedan",
        "hatchback",
        "SUV",
        "CUV",
        "coupe",
        "van",
        "minivan",
        "Electric Vehicle",
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Vehicle_type = model("vehicleType", vehicleTypeSchema);

export { Vehicle_type };
