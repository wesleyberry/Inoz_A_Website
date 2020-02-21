const path = require("path")
const router = require('express').Router();
const db = require('../models');
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Gets all bands for schedule
router.route('/bands').get((req, res) => {
    db.Band.findAll({})
    .then(response => {
        res.json(response);
    })
    .catch(err => res.json(err));
});

// Gets a specific band for schedule
router.delete("/bands:id", isAuthenticated, (req, res) => {
    if(req.user.name === 'rootroot') {
        db.Band.destroy({
            where: {
                id: req.params.id
            }
        }).then(res.send(200))
        .catch(err => res.json(err))
    }
});

// Creates a new band for schedule
router.post('/bands', isAuthenticated, (req, res) => {
    const band = req.body;
    if(req.user.name === 'rootroot') {
        db.Band.create({
            band: band.band,
            year: band.year,
            day: band.day,
            month: band.month,
            start: band.start,
            end: band.end
        }).then(response => res.json(response))
        .catch(err => res.json(err))
    }
})

module.exports = router;