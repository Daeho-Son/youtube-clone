import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, verifyPassword },
  } = req;
  if (password === verifyPassword) {
    res.redirect(routes.home);
  } else {
    res.redirect(routes.join);
  }
};

export const login = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

export const logout = (req, res) => {
  res.render("logout", { logout: "Logout" });
};

export const profile = (req, res) => {
  res.render("profile", { pageTitle: "Profile" });
};

export const editProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "Edit Profile" });
};

export const Logout = (req, res) => {
  res.render("logout", { pageTitle: "Logout" });
};

export const changePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password" });
};
