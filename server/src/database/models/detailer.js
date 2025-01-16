import { model, Schema } from "mongoose";

const detailerSchema = new Schema({
  name: { type: String, required: true },
  availability: {
    type: String,
    enum: ["Available", "Busy"],
    default: "Available",
  },
});

const Detailer = new model("detailer", detailerSchema);

export { Detailer };
