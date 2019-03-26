var List = require('../models/list');
var ListItem = require('../models/list_item');
var shortid = require('shortid');
var async = require('async');

var { check, validationResult } = require('express-validator/check');
var { sanitizeBody } = require('express-validator/filter');

exports.new_get = function (req, res) {
  res.render('new_list', {config: global.gConfig, req: req, csrf: req.csrfToken() });
}

exports.new_post = [
  
  check('name', "List name must be between 3 and 50 characters")
  .isLength({min: 3, max: 50})
  .trim()
  ,
  
  sanitizeBody('name').trim().escape()
  ,
  
  check('description', "Description must be shorter than 200 characters")
  .isLength({max: 200})
  ,
                  
  sanitizeBody('description')
  .trim().escape()
  ,
  
  check('type', "Please choose a list type")
  .trim().escape()
  ,
  
  (req, res, next) => {
    
    const errors = validationResult(req);
    
    var list = new List({
      name: req.body.name,
      description: req.body.description,
      votable: req.body.votable ? true : false,
      list_type: req.body.type,
      allow_submissions: req.body.allow_submissions ? true : false,
      moderate_submissions: req.body.moderate_submissions ? true : false,
      public_list: req.body.public ? true : false,
      author: req.user._id
    });
    
    if (!errors.isEmpty()) {
      res.render('new_list', {config: global.gConfig, error: errors.array()[0].msg, req: req, csrf: req.csrfToken()});
      return;
    }
    
    list.save(function (err) {
      if (err) { return next(err); }
        res.redirect(list.url);
    });
  }
  
];

exports.explore = function(req, res) {
  res.render('explore', {config: global.gConfig, req: req});
}

exports.list_detail = function(req, res, next) {
  if (shortid.isValid(req.params.list_id)) {
    List.findOne({url_id: req.params.list_id})
    .populate('contents author')
    .exec(function(err, list) {
      if (err) return next(err);
      if (list==null) {
        var err = new Error("List not found");
        err.status = 404;
        return next(err);
      }
      
      res.render('list_detail', {config: global.gConfig, list: list, req: req});
    });
  } else {
    next();
  }
}
