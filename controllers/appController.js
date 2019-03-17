Account = require('../models/account')
passport = require('passport');

// const { body,validationResult } = require('express-validator/check');
// const { sanitizeBody } = require('express-validator/filter');


exports.index = function(req, res) {
  res.render('index', { title: global.gConfig.app_name, user: req.user});
}

exports.login_get = function(req, res) {
  res.render('login', {title: "Login to " + global.gConfig.app_name,
    error: req.flash('error')
  })
}

exports.register_get = function(req, res) {
  res.render('register', {title: "Create an Account"})
}

exports.register_post = function(req, res) {
  Account.register(new Account({username: req.body.username}), req.body.password, function (err, account) {
    if (err) {
      return res.render('register', {error: err.message});
    }
    
    passport.authenticate('local')(req, res, function () {
      req.session.save(function (err) {
        if (err) {
          return next(err);
        }
        res.redirect('/');
      });
    });
  });
}

exports.login_after_post = function(req, res) {
  if (req.session.redirectTo) {
    var rt = req.session.redirectTo;
    delete req.session.redirectTo;
    res.redirect(rt);
  } else {
    res.redirect('/');
  }
}

exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
}
