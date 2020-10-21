import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    default: "name is required",
  },
  email: {
    type: String,
    default: "email is required",
  },
});

const model = mongoose.model("User", UserSchema);
export default model;
