module.exports = {
  appBaseURL: 'http://localhost:8080',
  appRoute: '/asc',
  ports: {
    integrations: '5555',
  },
  clientAPIKey: 'e9cb1352-55c2-4884-abef-032a961f7e5e',
  clientBaseURL: 'https://adyarspecialityclinic.com',
  graylog: {},
  airbrake: {},
  fakeEndPoint: {
    url: '',
    method: '',
    statusCode: ''
  },
  newrelic: {
    appName: process.env.NEW_RELIC_APP_NAME,
    licenceKey: process.env.NEW_RELIC_LICENSE_KEY
  },
  cdnUrl: '',
  logFlushWaitTime: 6000,
  loginEndpoint: '/asc/login',
  logoutEndpoint: '/asc/logged_out',
  redis: {
    port: 6379,
    host: '127.0.0.1',
  },
  skipLogging: false,
  authStrategy: 'local',
  mongoConnectionString: 'mongodb://localhost:27017/asc',
  adminUsers: 'vigneshwaratmrcooper@gmail.com, shanthini2612@gmail.com'
};
