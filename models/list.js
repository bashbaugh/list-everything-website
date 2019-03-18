var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListItemSchema = require('./list_item');

var ListSchema = new Schema({
  name: {
    type: String, 
    required: [true, "name required"],
    minlength: [3, "name must be at least 3 characters long"]},
  author: {
    type: Schema.types.ObjectId, 
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
  }
  created: {
    type: Date,
    required: true
  },
  public_list: {
    type: Boolean,
    required: true
  },
  contents: [ListItemSchema]
});

ListSchema.virtual('url').get(function() {
  return '/' + this._id;
});

module.exports = mongoose.model('List', ListSchema);

