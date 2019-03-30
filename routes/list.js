var express = require('express');
var router = express.Router();
var passport = require('passport');

var listController = require('../controllers/listController');
var ensureAuthenticated = require('../controllers/authController').ensureAuthenticated;
var csrf = require('csurf');
var csrfProt = csrf();

router.get('/new', ensureAuthenticated, csrfProt, listController.new_get);
router.post('/new', ensureAuthenticated, csrfProt, listController.new_post);

router.get('/explore', listController.explore);

router.get('/:list_id', listController.list_detail);

router.get('/:list_id/add', ensureAuthenticated, listController.list_add_get);
router.post('/:list_id/add', ensureAuthenticated, listController.list_add_post);

router.post('/:list_id/upvote', listController.list_upvote);

router.post('/:list_id/star', listController.list_star);


module.exports = router;
