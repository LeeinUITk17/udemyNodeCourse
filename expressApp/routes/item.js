var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/list', function(req, res, next) {
//   //res.send('List Videos demo');
//   res.render('itemList',{title:'List Items'})
// });

// // router.get('/video/add', function(req, res, next) {
// //     res.send('add Videos demo');
// //   });
router.get('/add',function(req,res,next){
  res.render('add');
})

module.exports = router;
