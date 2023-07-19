module.exports = {
  appBaseURL: 'https://adyarspecialityclinic.com',
  port: '8080',
  clientKey: 'X-IBM-Client-Id',
  clientAPIKey: undefined,
  clientBaseURL: 'https://adyarspecialityclinic.com',
  graylog: {
    host: undefined,
    port: undefined,
    facility: undefined
  },
  airbrake: {
    projectId: undefined,
    projectKey: undefined
  },
  redirectURL: '/asc/login',
  fakeEndPoint: {
    url: undefined,
    method: undefined,
    statusCode: undefined
  },
  newrelic: {
    appName: undefined,
    licenceKey: undefined
  },
  cdnUrl: undefined,
  logFlushWaitTime: 6000,
  loginEndpoint: '/asc/login',
  logoutEndpoint: '/asc/logged_out',
  redis: {
    port: 6379,
    host: '127.0.0.1',
    password: null,
  },
  skipLogging: false,
  appRoute: '/asc',
  useApiPrefix: false,
  adfs: {
    clientID: 'replace_with_your_client_id',
    redirectUrl: 'replace_with_redirect_url',
    clientSecret: 'replace_with_your_client_secret',
    resourceUrl: 'https://graph.microsoft.com'
  },
  authStrategy: undefined,
  mongoConnectionString: 'mongodb+srv://doadmin:x4f35cl8sM0yV217@db-mongodb-blr-adyarsp-4a48d930.mongo.ondigitalocean.com/admin?tls=true&authSource=admin'
};
