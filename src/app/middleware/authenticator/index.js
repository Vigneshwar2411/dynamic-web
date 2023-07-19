const passport = require('passport');
const strategies = require('./strategies');
const adfsConfig = require('./adconfig');
const config = require('../../config');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '521840119338-emgjuji9u058qnii8a4ncs14ru42b6r3.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

// const GOOGLE_CLIENT_ID = '718733167277-jd9lh5e7r4df67l68hh04rld0m4aukbb.apps.googleusercontent.com';
// const GOOGLE_CLIENT_SECRET = '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';

// const verify = (iss, sub, profile, accessToken, refreshToken, done) => {
//   done(null, {
//     profile,
//     accessToken,
//     refreshToken,
//   });
// };
//
// strategies(verify, config.authStrategy, adfsConfig);

const authUser = (request, accessToken, refreshToken, profile, done) => {
  return done(null, profile);
};

//Use "GoogleStrategy" as the Authentication Strategy
passport.use(new GoogleStrategy({
  clientID:     GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: `${config.appBaseURL}/asc/login/callback`,
  passReqToCallback   : true
}, authUser));

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((id, done) => done(null, id));

module.exports = passport;
