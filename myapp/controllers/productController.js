let data = require('../db/datos')


const productController = {
  detalle: function (req, res) {
    res.render('product', {producto: data.productos[0]});
  },

  agregarProducto: function(req,res){
    res.render('product-add');
  }
};

module.exports = productController;
