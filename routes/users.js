var express = require('express');
var router = express.Router();
var passport = require('passport');

var userController = require('../controllers/userController');
var ensureAuthenticated = require('../controllers/authController').ensureAuthenticated;

/* GET users listing. */
router.get('/', ensureAuthenticated, userController.index);

router.get('/:username', userController.user_detail);

module.exports = router;
