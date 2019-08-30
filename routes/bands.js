const path = require("path")
const router = require('express').Router();
const db = require('../models');

router.route('/bands').get((req, res) => {
    db.Band.findAll({})
    .then(response => {
        res.json(response);
    })
    .catch(err => res.json(err));
});

module.exports = router;