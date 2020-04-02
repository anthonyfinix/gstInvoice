const express = require('express');
const router = express.Router();
const Product = require('../modals/product');
const bodyParser = require('body-parser');

router.get('/', (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            res.send(err)
        } else {
            res.send(products)
        }
    })
});
// get single product
router.get('/:id', (req, res) => {
    Product.find({ _id: req.params.id }, (err, product) => {
        if (err) {
            res.send(err)
        } else {
            res.send(product)
        }
    })
});

// ADD PRODUCT
router.post('/', (req, res) => {
    let newProduct = new Product({
        name: req.body.name,
        price: parseInt(req.body.price),
        taxRate: parseInt(req.body.taxRate),
        sku: req.body.sku,
        description: req.body.description,
    });
    newProduct.save().then((product) => res.send(product))
});


router.put('/:id', bodyParser.json(), (req, res) => {
    Product.findOne({ _id: req.params.id }, (err, oldProduct) => {
        if (err) {
            res.send(err)
        } else {
            oldProduct.name = req.body.name;
            oldProduct.price = req.body.price;
            oldProduct.sku = req.body.sku;
            oldProduct.taxRate = req.body.taxRate;
            oldProduct.description = req.body.description;
            oldProduct.save().then(product => res.send(product));
        }
    });
});

router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    Product.findOne({ _id: req.params.id }, (err, product) => {
        if (err) {
            res.send(err)
        } else {
            product.remove().then(deletedProduct => res.send(deletedProduct))
        }
    });
});

// SEARCH WITH NAME
router.get('/search/:name', (req, res) => {
    Product.find({ name: { $regex: req.params.name.toString() } }, (err, product) => {
        if (err) {
            res.send(err)
        } else if (!product) {
            res.status(404).send('user not found')
        } else if (product) {
            res.send(product)
        } else {
            res.status(500).send('Error')
        }
    });
});

module.exports = router;