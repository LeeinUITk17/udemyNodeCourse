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
  let statusfilter = [
    {
      name: 'All',
      count: 0, // Initialize count to 0
      link: '#',
      class: 'btn m-b-sm btn-success btn-sm',
    },
    {
      name: 'Active',
      count: 0, // Initialize count to 0
      link: '#',
      class: 'btn m-b-sm btn-success btn-sm',
    },
    {
      name: 'Inactive',
      count: 0, // Initialize count to 0
      link: '#',
      class: 'btn m-b-sm btn-success btn-sm',
    },
  ];

  const calculateItemCount = (itemName, items) => {
    switch (itemName) {
      case 'All':
        return items.length;
        break;
      case 'Active':
        return items.filter((item) => item.status >= 1).length;
        break;
      case 'Inactive':
        return items.filter((item) => item.status == 0).length;
        break;
    }
  };

  ItemsModel.find({})
    .then((items) => {
      if (items && items.length > 0) {
        console.log('Items found:');

        // Update counts in statusfilter based on item status
        statusfilter.forEach((filter) => {
          switch (filter.name) {
            case 'All':
              filter.count = items.length;
              break;
            case 'Active':
              filter.count = items.filter((item) => item.status >= 1).length;
              break;
            case 'Inactive':
              filter.count = items.filter((item) => item.status === 0).length;
              break;
          }
        });

        res.render('list', { items, statusfilter, calculateItemCount });
      } else {
        console.log('No items found.');
        res.render('list', { items: [], statusfilter, calculateItemCount });
      }
    })
    .catch((err) => {
      console.error('Error fetching items:', err);
      // Handle the error appropriately
      res.status(500).send('Internal Server Error');
    });
});

router.get('/form',function(req,res,next){
  res.render('form');
})

module.exports = router;
