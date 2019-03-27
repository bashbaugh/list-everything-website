var Account = require('../models/account');
var async = require('async');
var List = require('../models/list');
var ObjectId = require('mongoose').Types.ObjectId;

exports.index = function(req, res) {
  res.redirect(req.user.url);
}

exports.user_detail = function(req, res, next) {
  async.waterfall([
    function(callback) {
      Account.findOne({username: req.params.username}, 'username')
      .exec(function (err, user) {
        if (user == null) { // No results.
            var err = new Error('User not found');
            err.status = 404;
            return next(err);
        }
        callback(err, user);
      });
    },
    function(user, callback) {
      List.find({
        author: user._id})
      .exec(function(err, user_list) {
        callback(err, user_list, user);
      });
    }
  ], function(err, user_lists, user) {
    if (err) { return next(err); }
    res.render('user_detail', {config: global.gConfig, req: req, user: user, user_lists: user_lists});
  });
}
