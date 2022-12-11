const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "34190122086-jtmbrk2qjvd1hih28l86dkuou1m34t1d.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET = "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";

const FACEBOOK_APP_ID = "1891259617883910";
const FACEBOOK_SECRET_ID = "31db35599a25b66f7493aeb05f43f68d";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_SECRET_ID,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
