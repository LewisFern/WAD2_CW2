const express = require("express");
const { auth } = require('express-openid-connect');
require('dotenv').config()

const app = express();

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUER,
  };

  // auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

const path = require('path');
const public = path.join(__dirname,'public');
app.use(express.static(public));

const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

const router = require('./routes/healthAppRoute');
app.use('/', router);

  app.listen(process.env.PORT ||3000, () => {
    console.log('Server started. Ctrl^c to quit.');
    })  