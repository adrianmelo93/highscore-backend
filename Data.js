var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
name: String,
score: Number
});





module.exports = mongoose.model('data', blogSchema);
