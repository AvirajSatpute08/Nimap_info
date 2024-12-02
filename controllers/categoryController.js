const Category = require('../models/categoryModel');

exports.getAllCategories = (req, res) => {
    Category.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.createCategory = (req, res) => {
    const { name } = req.body;
    Category.create(name, (err) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('Category created');
    });
};

exports.updateCategory = (req, res) => {
    const { id, name } = req.body;
    Category.update(id, name, (err) => {
        if (err) return res.status(500).send(err);
        res.send('Category updated');
    });
};

exports.deleteCategory = (req, res) => {
    const { id } = req.params;
    Category.delete(id, (err) => {
        if (err) return res.status(500).send(err);
        res.send('Category deleted');
    });
};
