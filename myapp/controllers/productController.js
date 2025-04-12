const producto = require('../db/datos')

const productController = {
  detalle: function (req,res) {
    res.render('producto', {
        detalle: datos.productos
    });
  },


  
  addform: function(req,res){
    res.render('productAdd');
  }
};

module.exports = productController;
