var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');

// var ListItemSchema = new Schema({
//   name: {type: String, required: true},
//   votes: {type: Number}
// });

var ListSchema = new Schema({
  name: {
    type: String, 
    required: [true, "name required"],
    minlength: [3, "name must be at least 3 characters long"]},
  url_id: {
    type: String,
    default: shortid.generate
  },
  author: {
    type: Schema.Types.ObjectId, 
    ref: 'Account', 
    required: [true, "author required"]},
  description: {
    type: String,
    maxlength: [200, "description must be shorter than 200 characters"]},
  votable: {
    type: Boolean,
    required: true
  },
  list_type: {
    type: String,
    required: true
  },
  allow_submissions: {
    type: Boolean,
    required: true
  },
  moderate_submissions: {
    type: Boolean
  },
  public_list: {
    type: Boolean,
    required: true
  },
  contents: [{
    type: Schema.Types.ObjectId,
    ref: 'ListItem'
    }]
});

ListSchema.virtual('url').get(function() {
  return '/' + this.url_id;
});

module.exports = mongoose.model('List', ListSchema);

