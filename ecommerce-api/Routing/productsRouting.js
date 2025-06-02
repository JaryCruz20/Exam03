const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Listar todos los productos
router.get('/productos', productController.getAllProducts);

// Obtener un producto por ID
router.get('/productos/:id', productController.getProductById);

// Crear un nuevo producto
router.post('/productos', productController.createProduct);

// Actualizar un producto
router.put('/productos/:id', productController.updateProduct);

// Eliminar un producto
router.delete('/productos/:id', productController.deleteProduct);

module.exports = router;
