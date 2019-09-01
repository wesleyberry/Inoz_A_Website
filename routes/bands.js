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

router.delete("/bands:id", (req, res) => {
    db.Band.destroy({
        where: {
            id: req.params.id
        }
    }).then(res.send(200))
    .catch(err => res.json(err))
});

module.exports = router;