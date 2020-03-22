const createError = require('http-errors');
const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Now, bring in, the 'Post' models 2-25-20
let Post = require('../models/post');

//Bring the database
// mongoose.connect('config.database');
// let mydb = mongoose.connection;



//First, check database connection
// mydb.once('open', function(){
//   console.log('Connected to Mongo database');
// });

// Check  database errors
// mydb.on('error', function(err){
//   console.log(err);
// });




//Connect to the mongo database
const db = 'mongodb://localhost/mymongodb';
mongoose.connect(db);




// All Routers
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');
const loginRouter = require('./routes/login');
const productRouter = require('./routes/product');

const usersRouter = require('./routes/users');

// All posts
var postsRouter = require('./routes/posts');


var app = express();

// view engine setup here
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//Use, Body Parser and Middleware Here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// use body parser 2/22/2020
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));



app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/product', productRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);



//posts
app.use('/posts', postsRouter);


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
