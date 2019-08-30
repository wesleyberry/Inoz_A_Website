require('dotenv').config();
const path = require('path');
const express = require('express');

const session = require("express-session");
// const passport = require("./config/passport");

const db = require('./models');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.use(routes);

const syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

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