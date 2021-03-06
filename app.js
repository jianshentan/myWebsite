
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3001);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon(__dirname + '/public/assets/util/favicon.ico'))
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  //app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/main', routes.main);
app.get('/about', routes.about);
app.get('/exhibitionOne', routes.exhibitionOne);
app.get('/exhibitionTwo', routes.exhibitionTwo);
app.get('/bottlePlantPattern', routes.bottlePlantPattern);
app.get('/cinderblocks', routes.cinderblocks);
app.get('/thetowergame', routes.thetowergame);
app.get('/continuousProfiles', routes.continuousProfiles);
app.get('/swingSlide', routes.swingSlide);
app.get('/nola', routes.nola);
app.get('/freefoodatbrown', routes.freefoodatbrown);
app.get('/horseTable', routes.horseTable);
app.get('/detentionTable', routes.detentionTable);
app.get('/dothopper', routes.dothopper);
app.get('/freeBeyonce', routes.freeBeyonce);
app.get('/andyGlitch', routes.andyGlitch);
app.get('/dogCase', routes.dogCase);
app.get('/concreteComfort', routes.concreteComfort);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
