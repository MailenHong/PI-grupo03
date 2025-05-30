const express = require ('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/detalle', productController.detalle)
router.get('/agregarProducto', productController.agregarProducto)
router.get('/productos', productController.lista);

module.exports = router;