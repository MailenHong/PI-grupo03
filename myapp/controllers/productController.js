const producto = require('../db/datos')

let productController = {
  detalle: function (req, res) {
    res.render('producto'), {
    };
  },

  agregarProducto: function(req,res){
    res.render('product-add');
  }
};

module.exports = productController;
