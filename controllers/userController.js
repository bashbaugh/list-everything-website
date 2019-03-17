var Account = require('../models/account');
var async = require('async');


exports.index = function(req, res) {
  res.redirect(req.user.url);
}

exports.user_detail = function(req, res) {
  res.render('user_detail', {title: req.params.username + " on " + global.gConfig.app_name, username: req.params.username});
}
