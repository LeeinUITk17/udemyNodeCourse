var express = require('express');
var router = express.Router();
const ItemsModel = require('../schemas/items');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});
router.get('/list',(req,res,next)=>{
  ItemsModel.find({})
  .then((items) => {
    if (items && items.length > 0) {
      console.log('Items found:');
      items.forEach((item, index) => {
        console.log(`Item ${index + 1}:`, item);
      });
    } else {
      console.log('No items found.');
    }
  })
  .catch((err) => {
    console.error('Error fetching items:', err);
    // Handle the error appropriately
  });
  res.render('list');
})
router.get('/form',function(req,res,next){
  res.render('form');
})

module.exports = router;
