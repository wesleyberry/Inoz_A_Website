const path = require("path")
const router = require('express').Router();
const bands = require('./bands');
const hours = require('./hours.js');
const specials = require('./specials.js');
const users = require('./users.js');
const logout = require('./logout.js');

// Bundles all api routes to /api
router.use('/api', hours);
router.use('/api', bands);
router.use('/api', specials);
router.use('/api', users);
router.use('/logout', logout);

module.exports = router;