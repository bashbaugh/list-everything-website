var express = require('express');
var router = express.Router();
var passport = require('passport');

var listController = require('../controllers/listController');
var ensureAuthenticated = require('../controllers/authController').ensureAuthenticated;

router.get('/new', ensureAuthenticated, listController.new_get);
router.get('/explore', listController.explore);

module.exports = router;
