import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/youtube-clone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("❌ connection Error");
});
db.once("open", () => {
  console.log("✅ Connected mongoDB");
});
