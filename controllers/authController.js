var passport = require('passport');

exports.ensureAuthenticated = function(req, res, next) {
  if (!req.isAuthenticated()) {
    req.flash('error', "Please log in first");
    req.session.redirectTo = req.url;
    res.redirect('/login');
  } else {
    next();
  }
}
