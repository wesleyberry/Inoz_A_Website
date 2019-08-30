const path = require("path")
const router = require('express').Router();
const bands = require('./bands');
const hours = require('./hours.js');
const specials = require('./specials.js');

router.use('/api', hours);
router.use('/api', bands);
router.use('/api', specials);

module.exports = router;