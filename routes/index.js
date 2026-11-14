var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'INFR3120' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/Contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
