const path = require("path")
const router = require('express').Router();
const db = require('../models');
const passport = require("../config/passport");
require('dotenv').config();

// Authenticates user
router.post('/users', passport.authenticate('local'), (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    res.json({
        name,
        password
    });
});

// Sign up user
router.post('/users/signup', (req, res) => {
    db.User.create({
        name: req.body.name,
        password: req.body.password
    }).then(response => res.json(response))
    .catch(err => res.json(err))
});

// Checks to see if user exists
router.post('/users/checkDB', (req, res) => {
    db.User.create({
        name: process.env.NAME,
        password: process.env.PASSWORD
    }).then(response => res.json(200))
    .catch(err => res.json(err))
});

module.exports = router;