const db = require('../database/models');
let Producto = db.Producto;

const productController = {

  list: function (req, res) {
    db.Producto.findAll()
      .then(function(productos){
        res.render("listadoDeProductos",{productos:productos})
      })
  },
  detalle: function (req, res) {
    res.render('product', { producto: data.productos[0] });
  },

  agregarProducto: function (req, res) {
    res.render('product-add', { usuario: data.usuario });
  }
};

module.exports = productController;
