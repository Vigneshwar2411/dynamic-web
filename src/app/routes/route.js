const router = require('express').Router();

const featureFlags = require('./feature-flags');
const logger = require('./logger');
const login = require('./login');
const profile = require('./profile');
const appointment = require('./appointment');
const users = require('./users');
const patients = require('./patients');

router.use('/login', login);
router.use('/feature_flags', featureFlags);
router.use('/', logger);
router.use('/api', profile);
router.use('/appointment', appointment);
router.use('/users', users);
router.use('/patients', patients);

module.exports = router;
