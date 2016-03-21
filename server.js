var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var foodCtrl = require('./controllers/foodCtrl');// the dot means hear.  Always put the ./
var port = 8090;
var app = express();
var mongoUri = 'mongodb://localhost:27017/menu';

app.use(bodyParser.json()); //body parser is what's crating the req.body for us. without it, it is a bigger hassle to get data from post requests. Makes it easier to handle data
app.use(cors());
//this is what we need to do in our server.js to be able to access the files in /public
app.use(express.static(__dirname + '/public')); //we want to get into this public folder from our current directory.
app.post('/api/food', foodCtrl.addFood); //endpoint found in foodCtrl.js
app.post('/api/food/review', foodCtrl.addReview);
app.get('/api/food/review', foodCtrl.getOneReview);
app.delete('/api/food/:id', foodCtrl.deleteFood);
app.get('/api/food', foodCtrl.getFood);



app.listen(port, function() {
    console.log('listening on ' + port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log('connected to MongoDb at ', mongoUri);
});
