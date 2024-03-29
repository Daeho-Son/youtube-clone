import multer from "multer";
import routes from "./routes";

const uploadMulter = multer({ dest: "uploads/videos" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube Clone";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  next();
};

export const videoUpload = uploadMulter.single("videoFile");

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (!req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};
