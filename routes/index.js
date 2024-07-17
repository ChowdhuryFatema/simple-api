var express = require('express');
var router = express.Router();


let item = [
  { id: 1, name: 'Item1', price: 100 },
  { id: 2, name: 'Item2', price: 200 }
]

// Get Items
router.get('/api/items', (req, res) => {
  res.set('X-Custom-Header', 'HelloWorld');
  res.status(200).json(item);
})

// Get Single Item

// Post Item
// router.post('/', (req, res) => {

// })




/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
