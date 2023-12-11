var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Load environment variables if using dotenv
// require('dotenv').config();

// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://leeinearth817:cnttvietnhatk17@cluster0.pjk9ees.mongodb.net/expressapp', {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
// });
mongoose.connect('mongodb+srv://leeinearth817:cnttvietnhatk17@cluster0.pjk9ees.mongodb.net/expressapp')
var indexRouter = require('./routes/index');
var itemRouter = require('./routes/item');


var app = express();

var db = mongoose.connection;
db.on('error', function (error) {
  console.log('Connection error:', error);
});

db.once('open', function () {
  console.log('Connected to the database');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Remove unused middleware
// app.use(cookieParser());



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/item', itemRouter);

// Remove commented-out routes
// app.use('/users', usersRouter);
// app.use('/list', require('./routes/item'));
// app.use('/form', require('./routes/item'));

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
