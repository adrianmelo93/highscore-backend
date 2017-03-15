var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var data = require('./Data.js');

var db = 'mongodb://localhost/data';
mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/data', function(req, res){
  data.find({})
  .sort({score: -1})
  .exec(function(err, data){
if (err){
  res.send('err has ocurred')
}else {
  console.log(data);
  res.json(data);
}
  });
});

app.post('/data', function (req, res){
var ndata = new data();
ndata.name = req.body.name;
ndata.score = req.body.score;
ndata.save(function(err, data){
if(err){
  console.log('err has ocurred');
}else{
  console.log(data);
  res.json(data);
}
});
});

app.listen(1250);
