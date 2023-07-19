const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const csrf = require('./middleware/csrf-validation');
const config = require('./config');

const createContext = require('./middleware/create-context');
const checkAuthentication = require('./middleware/check-authentication');
const addTokens = require('./middleware/add-tokens');
const auth = require('./middleware/authenticator');

const routes = require('./routes/route');

const app = express();

app.use(helmet());
app.use(compression());

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use(cookieParser());

app.use(session({
  secret: 'won\'t tell because it\'s secret',
  store: MongoStore.create({ mongoUrl: config.mongoConnectionString , ttl: 24 * 60 * 60}),
  resave: false,
  saveUninitialized: false,
}));


app.use(createContext);

app.use(addTokens);
app.use(csrf);
app.use(auth.initialize());
app.use(auth.session());

app.enable('view cache');
app.engine('.html', exphbs({
  defaultLayout: 'layout',
  extname: '.html'
}));
app.set('view engine', '.html');


app.use(express.static(path.join(__dirname, '../../', 'public')));

app.use(config.appRoute, routes);

// app.get('/asc/login', auth.authenticate('google', { scope : ['profile', 'email'] }));
//
// app.get('/asc/login/callback',
//   auth.authenticate('google', { failureRedirect: '/error' }), function(req, res) {
//     res.redirect(`${config.clientBaseURL}/asc/dashboard`);
//   });
//
app.get('/asc/logout', async (req,res) => {
  await req.session.destroy();
  return res.redirect(`${config.clientBaseURL}/asc/dashboard`);
});

app.get(`${config.appRoute}/health`, (req, res) => {
  return res.status(200).send('I am ok');
});

app.get(`${config.appRoute}/dashboard`, async (req, res) => {
  console.log('Main route invoked', req.path);
  await req.generateCSRF();
  return res.render('home', req.tokens);
});

app.get(`${config.appRoute}/profile`, async (req, res) => {
  console.log('Profile route invoked', req.path);
  await req.generateCSRF();
  return res.render('home', req.tokens);
});

app.get(`${config.appRoute}/admin`, async (req, res) => {
  console.log('Admin route invoked', req.path);
  await req.generateCSRF();
  return res.render('home', req.tokens);
});

// app.get(`${config.appRoute}(/*)?`, async (req, res) => {
//   console.log('Main route invoked', req.path);
//   await req.generateCSRF();
//   return res.render('home', req.tokens);
// });

module.exports = app;

