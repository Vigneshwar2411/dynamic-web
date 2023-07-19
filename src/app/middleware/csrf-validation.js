const Tokens = require('csrf');

const skipCSRFValidation = ['get', 'head'];

const tokens = new Tokens({
  saltLength: 10,
  secretLength: 18,
});

module.exports = (req, res, next) => {
  if (!req.session) {
    return next();
  }

  if (skipCSRFValidation.indexOf(req.method.toLowerCase()) === -1) {
    const csrfToken = req.headers['x-xsrf-token'];
    if (!tokens.verify(req.session.csrf, csrfToken)) {
      const error = new Error(`invalid csrf token - ${csrfToken}, secret - ${req.session.csrf}`);
      error.status = 403;

      return next(error);
    }
  }
  req.generateCSRF = generateCSRF(req);
  return next();
};

const generateCSRF = req => {
  return async () => {
    const secret = await tokens.secret();
    const token = tokens.create(secret);

    // await req.setSession('_csrf', secret);
    // await req.setSession('_csrfToken', token);
    // req.session = {
    //   ...req.session,
    //   appSession: {
    //     csrf: token
    //   }
    // };
    // console.log('csrf generated *********', token);
    req.session.csrf = secret;
    req.tokens.csrftoken = token;
  };
};
