var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./app_api/models/db');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const indexRouter = require('./app_server/routes/index');
const apiRoutes = require('./app_api/routes/index');

var app = express();
module.exports = app;

app.use(cors({
  origin: true,
  credentials: true
}));

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET || 'change_this_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 86400000 }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.session = req.session;
  next();
});

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_public')));

app.use('/', indexRouter);
app.use('/api', apiRoutes);

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./sslcert/key.pem', 'utf8');
var certificate = fs.readFileSync('./sslcert/cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
httpServer.listen(8000);
httpsServer.listen(443);