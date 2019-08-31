const path = require("path");
const router = require('express').Router();
const db = require('../models');

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

router.put('/hours/:value', (req, res) => {
    const value = req.params.value;
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
});

module.exports = router;