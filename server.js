// Babel ES6/JSX Compiler
require('babel-core/register');

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var async = require('async');
var request = require('request');
var xml2js = require('xml2js');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');
var config = require('./config');

var mongoose = require('mongoose');
var Day = require('./models/day');

var app = express();

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/days/', function(req, res, next) {
  var dayId = req.query.dayId;
  Day.findOne({ dayId: dayId }, function(err, day) {
    if (err) return next(err);

    if (day) {
      return res.status(409).send({ message: character.name + ' is already in the database.' });
    }

    callback(err, dayId);
  });

  var day = new Day({
             dayId: dayId,
             dayNum: dayNum,
             staticImageUrl: staticImageUrl,
             gifImageUrl: gifImageUrl,
             backgroundImageUrl: backgroundImageUrl
           });

   day.save(function(err) {
     if (err) return next(err);
     res.send({ message: dayNum + ' has been added successfully!' });
   });
});

app.get('/api/tawkify/saleprice', function(req, res, next){
  // connect with tawkify server to see how much the sale price is. 
})
app.get('/api/tawkify/numremaining', function(req, res, next){
  // connect with tawkify server to see how many are remaining
  // return data back to actions
})



app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

/**
 * Server
 */
var server = require('http').createServer(app);

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
