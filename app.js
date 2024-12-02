const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
