'use strict';
var express = require('express');

var blog = require('../controllers/blog.js');

var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

router.post('/', blog.addblogrecord);

module.exports = router;
