var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
 
app.use(express.static(path.join(__dirname, './')));

/*压缩*/
var compression = require('compression');
var express = require('express');
var app = express();
app.use(compression());  
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './')));

app.use('/',express.static(path.join(__dirname, './')));
 
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
