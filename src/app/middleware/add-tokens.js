const config = require('../config');

module.exports = (request, response, next) => {

  const { session: { passport } } = request;
  let clientConfig = {
    cdnUrl: config.cdnUrl,
    logFlushWaitTime: config.logFlushWaitTime,
    env: process.env.NODE_ENV,
    appBaseURL: config.appBaseURL,
    appRoute: config.appRoute,
    isLoggedIn: passport && Object.keys(passport.user).length > 1 && passport.user.emails[0].verified,
  };

  const tokens = {
    cdnUrl: config.cdnUrl,
    appRoute: config.appRoute, //Config for layouts
    config: Buffer.from(JSON.stringify(clientConfig)).toString('BASE64'),
  };

  if (request.session) {
    tokens.hasSession = true;
  }

  request.tokens = tokens;

  return next();
};
