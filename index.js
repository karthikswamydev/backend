const cookieSession = require("express-session");

const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");

const router = express();

router.use(
  cookieSession({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true },
    maxAge: 24 * 60 * 60 * 100,
  })
);

router.use(passport.initialize());
router.use(passport.session());

router.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,DELETE",
    credentials: true,
  })
);

router.use("/auth", authRoute);
router.listen(5000, () => {
  console.log("backend server listening on 5000");
});
