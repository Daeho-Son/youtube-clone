import routes from "../routes";
import Video from "../models/Video";

// Home
export const home = async (req, res) => {
  const videos = await Video.find({});
  res.render("home", { videos });
};

// Search
export const search = async (req, res) => {
  const {
    query: { search_query: searchQuery },
  } = req;
  try {
    const videos = await Video.find({
      title: { $regex: searchQuery, $options: "i" },
    });
    console.log(videos);
    res.render("search", {
      pageTitle: searchQuery,
      videos,
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Upload
export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    title,
    description,
    src: path,
  });
  res.redirect(routes.videoDetail(newVideo.id));
};

// Video Detail
export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", {
      pageTitle: video.title,
      video,
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Edit Video
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `편집 ${video.title}`, video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate(
      { _id: id },
      {
        title,
        description,
      }
    );
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Delete Video
export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Video.findOneAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
