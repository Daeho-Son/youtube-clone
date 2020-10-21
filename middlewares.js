import multer from "multer";
import routes from "./routes";

const uploadMulter = multer({ dest: "uploads/videos" });

export const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.authenticate = true;
  next();
};

export const videoUpload = uploadMulter.single("videoFile");
