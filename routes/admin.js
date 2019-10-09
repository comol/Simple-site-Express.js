'use strict';
var express = require('express');
var router = express.Router();
var goods = require('../controllers/goods.js');
var skills = require('../controllers/skills.js');

router.get('/', function (req, res) {
  res.render('admin');
});

router.post('/skills', skills.addslills);
router.post('/upload', goods.addgood);

module.exports = router;
