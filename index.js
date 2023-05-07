const nedb = require("nedb");
const express = require("express");
const { auth } = require('express-openid-connect');
require('dotenv').config()

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUER,
  };

app.set("views",  [__dirname + '/views', __dirname + '/views/Fitness', __dirname + '/views/healthLifestyle',
 __dirname + '/views/Nutrition', __dirname + '/views/user']);
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.use(auth(config));

const db = new nedb({ filename : "goals.db", autoload: true });

db.loadDatabase(function (err) {
  if (err) {
      console.log(err);
  } else {
      console.log('Database loaded successfully');
  }
});

const router = require('./routes/healthAppRoute');
app.use('/', router);

  app.listen(process.env.PORT ||3000, () => {
    console.log('Server started. Ctrl^c to quit.');
    })  