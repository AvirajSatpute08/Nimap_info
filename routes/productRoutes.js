const express = require('express');
const { getPaginatedProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = express.Router();

router.get('/', getPaginatedProducts);
router.post('/', createProduct);
router.put('/', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
