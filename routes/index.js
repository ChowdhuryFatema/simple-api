var express = require('express');
var router = express.Router();


let items = [
  { id: 1, name: 'Item1', price: 100 },
  { id: 2, name: 'Item2', price: 200 }
]

// Get Items
router.get('/api/items', (req, res) => {
  res.set('X-Custom-Header', 'HelloWorld');
  res.status(200).json(items);
})

// Get Single Item
router.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if(!item) return res.status(404).send('Item not found')
  res.status(200).json(item);
})

// Post Item
// router.post('/api/items', (req, res) => {
//   const { name, price } = req.body;
//   if(!name || !price) return res.status(404).send('')
// })




/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
