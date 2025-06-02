const Product = require('../models/productModel');

exports.getAllProducts = (req, res) => {
  Product.getAll((err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener productos', err });
    res.json(results);
  });
};

exports.getProductById = (req, res) => {
  const { id } = req.params;
  Product.getById(id, (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al buscar producto', err });
    if (result.length === 0) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(result[0]);
  });
};

exports.createProduct = (req, res) => {
  const newProduct = req.body;
  Product.create(newProduct, (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al crear producto', err });
    res.status(201).json({ message: 'Producto creado', id: result.insertId });
  });
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  Product.update(id, updatedProduct, (err) => {
    if (err) return res.status(500).json({ error: 'Error al actualizar producto', err });
    res.json({ message: 'Producto actualizado' });
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  Product.delete(id, (err) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar producto', err });
    res.json({ message: 'Producto eliminado' });
  });
};
