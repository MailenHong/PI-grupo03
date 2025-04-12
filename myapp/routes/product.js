const express = require ('express');
const router = express.Router();
const productsController = require('../controllers/productController')

router.get('/id', productsController.detalle);
router.get('/add', productsController.addform)

module.exports = router;