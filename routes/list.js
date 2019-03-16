var express = require('express');
var router = express.Router();
var passport = require('passport');

var listController = require('../controllers/listController');

router.get('/new', listController.new_get);
router.get('/explore', listController.explore);

module.exports = router;
