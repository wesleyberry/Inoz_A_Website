const router = require('express').Router();
const db = require('../models');

router.route('/bands').get(res => {
    db.band.findAll({})
    .then(response => {
        res.json(response);
    })
    .catch(err => res.json(err));
});