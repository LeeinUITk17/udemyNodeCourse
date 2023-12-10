var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var expressLayouts = require('express-ejs-layouts');
var mongoose=require('mongoose');
// mongoose.connect('mongo+srv://leeinearth817:cnttvietnhatk17@mongodb.com/sample_weatherdata')
var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var itemRouter=require('./routes/item');
//var videoRouter=require('./routes/item')  
const ItemsModel=require('./schemas/items');


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

// app.use(expressLayouts);
// app.set('layout', 'dashboard');

ItemsModel.find({})
  .then(item => {
    if (item && item.length > 0) {
      console.log('Item found:');
      item.forEach((item, index) => {
        console.log(`Item ${index + 1}:`, item);
      });
    } else {
      console.log('No item found.');
    }
  })
  .catch(err => {
    console.error('Error fetching item:', err);
    // Handle the error appropriately (e.g., send an error response if it's an API)
  });


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));


app.use('/', indexRouter);
//app.use('/users', usersRouter);
// app.use('/list',require('./routes/item'));
// app.use('/form',require('./routes/item'));
app.use('/item',itemRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
