var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: {type: String, 
      minlength: [3, "username must be longer than 3 characters"],
      maxlength: [20,"username must be shorter than 20 characters"],
      required: [true, "Please choose a username"]
      
    },
    password: {type: String}
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account); 
