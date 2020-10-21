import dotenv from "dotenv";
import "./db";
import app from "./app";
import "./models/User";
import "./models/Video";

dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅ http://localhost:${PORT}`);
});
