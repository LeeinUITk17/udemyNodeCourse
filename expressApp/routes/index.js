var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard Page' });
});
router.get('/add',function(req,res,next){
  res.render('items/add');
})
module.exports = router;
