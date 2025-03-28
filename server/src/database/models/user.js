import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    username: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      required: true,
    },
  },
  { timestamps: true }
);

export const User = model("user", userSchema);