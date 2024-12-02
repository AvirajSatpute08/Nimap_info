const Product = require('../models/productModel');

exports.getPaginatedProducts = (req, res) => {
    const { page = 1, pageSize = 10 } = req.query;
    Product.getAllPaginated(Number(page), Number(pageSize), (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.createProduct = (req, res) => {
    const { name, categoryId } = req.body;
    Product.create(name, categoryId, (err) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('Product created');
    });
};

exports.updateProduct = (req, res) => {
    const { id, name, categoryId } = req.body;
    Product.update(id, name, categoryId, (err) => {
        if (err) return res.status(500).send(err);
        res.send('Product updated');
    });
};

exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    Product.delete(id, (err) => {
        if (err) return res.status(500).send(err);
        res.send('Product deleted');
    });
};
