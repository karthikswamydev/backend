const express = require("express");
router = express.Router();
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000/home";
const ERROR_URL = "http://localhost:3000/error";

// const router = router();

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      // cookies:req.
    });
  }
});
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
    user: req.user,
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  req.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);
router.get(
  "/google/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
