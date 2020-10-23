import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "회원가입" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, verifyPassword },
  } = req;
  if (password !== verifyPassword) {
    res.status(400);
    res.render("join", { pageTitle: "회원가입" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.join);
    }
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "로그인" });
};
export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const profile = (req, res) => {
  res.render("profile", { pageTitle: "프로필" });
};

export const editProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "프로필 수정" });
};

export const changePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "비밀번호 변경" });
};
