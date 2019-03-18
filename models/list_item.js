var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListItemSchema = new Schema({ 
  name: {
    type: String,
    required: true
  },
  votes: {
    type: Number
  }
}); 

module.exports = mongoose.model('ListItem', ListItemSchema);
