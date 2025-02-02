var express = require('express');
var router = express.Router();


let items = [
    { id: 1, name: 'Item1', price: 100 },
    { id: 2, name: 'Item2', price: 200 }
]

// Get Items API
router.get('/', (req, res) => {
    res.set('X-Custom-Header', 'HelloWorld');
    res.status(200).json(items);
})

// Get Single Item API
router.get('/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found')
    res.status(200).json(item);
})

// Create Item API
router.post('/', (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) return res.status(404).send('Invalid request');
    const newItem = { id: items.length + 1, name, price }
    items.push(newItem);
    res.status(201).json(newItem);
})

// Update Item API
router.put('/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');

    const updatedItem = req.body;
    item.name = updatedItem.name ? updatedItem.name : item.name;
    item.price = updatedItem.price ? updatedItem.price : item.price;

    res.status(200).json(item);
});

// Delete Item API
router.delete('/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (item) {
        res.json({ items: items.filter(i => i.id !== parseInt(req.params.id)) });
    } else {
        res.status(204).send('');
    }

})

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
module.exports = router;
