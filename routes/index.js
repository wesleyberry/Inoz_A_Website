const router = require('express').Router();
const bands = require('./bands');


router.use('/api', bands);

module.exports = router;