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
router.get('/list', (req, res, next) => {
  ItemsModel.find({})
    .then((items) => {
      if (items && items.length > 0) {
        console.log('Items found:');
        items.forEach((item, index) => {
          console.log(`Item ${index + 1}:`, item);
        });
        res.render('list', { items }); // Fix: Enclose res.render with curly braces
      } else {
        console.log('No items found.');
        res.render('list', { items: [] }); // Assuming you want to render with an empty array when no items are found
      }
    })
    .catch((err) => {
      console.error('Error fetching items:', err);
      // Handle the error appropriately
      res.status(500).send('Internal Server Error'); // Example: Send a 500 status in case of an error
    });
});


router.get('/form',function(req,res,next){
  res.render('form');
})

module.exports = router;
