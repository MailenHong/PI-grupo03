const express = require ('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/detalle/:id', productController.detalle)
router.get('/agregarProducto', productController.agregarProducto)
router.get('/productos', productController.lista);

module.exports = router;