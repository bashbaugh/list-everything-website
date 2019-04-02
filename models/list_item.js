var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListItemSchema = new Schema({ 
  name: {
    type: String,
    required: true
  },
  votes: [{
    type: Schema.Types.ObjectId,
    ref: 'Account'
  }]
}); 

module.exports = mongoose.model('ListItem', ListItemSchema);
