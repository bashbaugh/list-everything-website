var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');

var ListItemSchema = new Schema({ 
  name: {
    type: String,
    required: true
  },
  votes: [{
    type: Schema.Types.ObjectId,
    ref: 'Account'
  }],
  id: {
    type: String,
    default: shortid.generate
  }
}); 

module.exports = mongoose.model('ListItem', ListItemSchema);
