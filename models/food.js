var mongoose = require('mongoose');
var Schema = mongoose.Schema; //get the schema from the mongoose object

var Food = Schema({ //in here is where we want to define all of the structure that we want our food data to be in. What kind of properties does our data need?
    color: String,
    name: { type: String, required: true },
    reviews: [{
        reviewer: {type: String, required: true},
        rating: {type: Number, required: true},
        date: {type: Date, default: new Date()}
    }]

});

module.exports = mongoose.model('Food', Food);
