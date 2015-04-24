var express = require('express')
  , app = express() // Web framework to handle routing requests
  , cons = require('consolidate') // Templating library adapter for Express
  , MongoClient = require('mongodb').MongoClient // Driver for connecting to MongoDB
  , routes = require('./routes'); // Routes for our application

//MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
MongoClient.connect('mongodb://shutiao:Justin74559@ds041248.mongolab.com:41248/heroku_app36204048', function(err, db){
    "use strict";
    if(err) throw err;

    // Register our templating engine
    app.engine('html', cons.swig);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');
    app.set('port', (process.env.PORT || 8080));
    // Express middleware to populate 'req.cookies' so we can access cookies
    app.use(express.cookieParser());

    // Express middleware to populate 'req.body' so we can access POST variables
    app.use(express.bodyParser());

    // Application routes
    routes(app, db);

    app.listen(app.get('port'));
    })	   
    