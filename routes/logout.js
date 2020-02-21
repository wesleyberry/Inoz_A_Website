const router = require("express").Router();
const path = require('path');

// Logout
router.get("/", function(req, res) {
    req.logout();
    res.json();
    res.sendFile(path.join(__dirname, "../public/login.html"));
});

module.exports = router;