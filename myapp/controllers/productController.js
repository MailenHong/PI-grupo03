const producto = require('../db/datos')

const productController = {
  detalle: function (req, res) {
    res.render('producto', {
      detalle: datos.productos
    });
  }
};

module.exports = productController;
