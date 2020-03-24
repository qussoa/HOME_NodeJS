var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var bookRouter = require("./routes/book_router")
var crudRouter = require("./routes/crud_router")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/book',bookRouter)
// 데이터 지향
// book이라는 데이터 관점에서 본 path 구조,
// 일반적으로 익숙한 http request path를
// REST full 방식으로 구현
// localhost:3000/crud/:id/list
// --> /crud/book/list
// --> /crud/member/list
// --> /crud/address/list
app.use('/crud',crudRouter)

/*
 Resource 지향형 
 crud를 수행할 떄 어떤 데이터를 '어떻게' 할 것인가에 
 관점(지향) 둠
 RESTfull에서 권장하는 path 구현방식
 Resource 지향 Restfull

  localhost:3000/book/list
  localhost:3000/book/insert
  localhost:3000/book/update
  localhost:3000/book/delete
*/
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
