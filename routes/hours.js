const path = require("path");
const router = require('express').Router();
const db = require('../models');
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Gets all hours
router.route('/hours').get((req, res) => {
    db.Hour.findAll({
        where: {
            current: 1
        }
    })
    .then(response => {
        res.json(response);
    })
    .catch(err => res.json(err));
});

// Changes hours
router.put('/hours/:value', isAuthenticated, (req, res) => {
    const value = req.params.value;
    if(req.user.name === 'rootroot') {
        if(value === '1') {
            db.Hour.update({
                current: 1
            }, {
                where: {
                    season: 'Summer'
                }
            }).then(
                db.Hour.update({
                    current: 0
                }, {
                    where: {
                        season: 'Winter'
                    }
                })
                .then(res.send(200))
                .catch(err => res.json(err)))
            .catch(err => res.json(err));
        } else if(value === '2') {
            db.Hour.update({
                current: 1
            }, {
                where: {
                    season: 'Winter'
                }
            }).then(
                db.Hour.update({
                    current: 0
                }, {
                    where: {
                        season: 'Summer'
                    }
                })
                .then(res.send(200))
                .catch(err => res.json(err)))
            .catch(err => res.json(err));
        }
    }
});

// Changes Tuesdays to open or closed
router.put('/hours/tuesdays/:value', isAuthenticated, (req, res) => {
    const value = req.params.value;
    console.log(value);
    if(req.user.name === 'rootroot') {
        if(value === '1') {
            db.Hour.update({
                hours: '11:00 AM - 9:00 PM'
            }, {
                where: {
                    day: 'Tuesday'
                }
            })
            .then(res.send(200))
            .catch(err => res.json(err));
        } else if(value === '2') {
            db.Hour.update({
                hours: 'CLOSED'
            }, {
                where: {
                    day: 'Tuesday'
                }
            })
            .then(res.send(200))
            .catch(err => res.json(err));
        }
    }
})

module.exports = router;