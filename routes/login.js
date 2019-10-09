'use strict';
var express = require('express');
var auth = require('../controllers/auth.js');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('login');
});

router.post('/', auth.loginuser);

module.exports = router;
