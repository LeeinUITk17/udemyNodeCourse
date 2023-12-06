var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});
router.get('/list',function(req,res,next){
  res.render('list');
})
router.get('/form',function(req,res,next){
  res.render('form');
})

module.exports = router;
