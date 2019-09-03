require('dotenv').config();
const path = require('path');
const express = require('express');
const googleMapsClient = require('@google/maps').createClient({
  key: process.env.API_KEY,
  Promise: Promise
});
const session = require("express-session");
const passport = require("./config/passport");
const db = require('./models');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.use(session({ secret: process.env.PASSPORT_SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

const syncOptions = { force: false };

googleMapsClient.geocode({address: '14004 Ranch Road 12, Wimberley, TX'})
  .asPromise()
  .then((response) => {
    console.log(response.json.results);
  })
  .catch((err) => {
    console.log(err);
});

if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}

const isAuthenticated = require("./config/middleware/isAuthenticated");
app.get("/admin", isAuthenticated, function(req, res) {
  if(req.user.name === 'rootroot') {
    res.sendFile(path.join(__dirname, "/public/admin.html"));
  } else {
    res.sendFile(path.join(__dirname, "/public/login.html"));
  }
});
app.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/login.html"));
});


db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;