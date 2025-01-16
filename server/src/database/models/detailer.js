import { model, Schema } from "mongoose";

const detailerSchema = new Schema({
    name: {type: String, required: true},
    phone: {type: Number, required: true},
});

const Detailer = new model("detailer", detailerSchema);

export { Detailer };
