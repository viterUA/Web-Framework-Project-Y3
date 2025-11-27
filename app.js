var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./app_api/models/db');
const session = require('express-session');
const cors = require('cors');

const indexRouter = require('./app_server/routes/index');
const apiRoutes = require('./app_api/routes/index');

var app = express();
module.exports = app;

app.use(cors({
  origin: 'http://localhost:4200',
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


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_public')));


app.use('/', indexRouter);
app.use('/api', apiRoutes);
