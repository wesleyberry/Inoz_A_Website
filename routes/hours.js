const path = require("path");
const router = require('express').Router();
const db = require('../models');

router.route('/hours').get((req, res) => {
    db.Hour.findAll({
        where: {
            current: true
        }
    })
    .then(response => {
        res.json(response);
    })
    .catch(err => res.json(err));
});

module.exports = router;