const db = require('./db');

const Product = {
    getAllPaginated: (page, pageSize, callback) => {
        const offset = (page - 1) * pageSize;
        const sql = `
            SELECT p.id AS ProductId, p.name AS ProductName, c.id AS CategoryId, c.name AS CategoryName 
            FROM products p 
            JOIN categories c ON p.category_id = c.id 
            LIMIT ?, ?
        `;
        db.query(sql, [offset, pageSize], callback);
    },
    create: (name, categoryId, callback) => {
        db.query('INSERT INTO products (name, category_id) VALUES (?, ?)', [name, categoryId], callback);
    },
    update: (id, name, categoryId, callback) => {
        db.query('UPDATE products SET name = ?, category_id = ? WHERE id = ?', [name, categoryId, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM products WHERE id = ?', [id], callback);
    },
};

module.exports = Product;
