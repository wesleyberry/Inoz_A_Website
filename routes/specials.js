const path = require("path")
const router = require('express').Router();
const db = require('../models');

router.route('/specialsFood').get((req, res) => {
    db.Special.findAll({
        where: {
            type: 'Food'
        }
    })
    .then(response => {
        res.json(response);
    })
    .catch(err => res.json(err));
});

router.route('/specialsBar').get((req, res) => {
    db.Special.findAll({
        where: {
            type: 'Bar'
        }
    })
    .then(response => {
        res.json(response);
    })
    .catch(err => res.json(err));
});

router.route('/specials').get((req, res) => {
    db.Special.findAll({})
    .then(response => {
        res.json(response);
    })
    .catch(err => res.json(err));
});

router.delete("/specials:id", (req, res) => {
    db.Special.destroy({
        where: {
            id: req.params.id
        }
    }).then(res.send(200))
    .catch(err => res.json(err))
});

module.exports = router;