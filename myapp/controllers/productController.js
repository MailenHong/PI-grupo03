const db = require('../database/models');
let Producto = db.Producto;

const productController = {

  lista: function (req, res) {
    Producto.findAll({
      include: [{ association: "usuario" }]
    })
    .then(function (productos) {
      res.render("listaDeProductos", { productos: productos });
    })
    .catch(function (error) {
      res.send("Error no se puede obtener ningún producto");
    });
  },

detalle: function (req, res) {
  Producto.findByPk(req.params.id, {
    include: [
      {association: 'usuario' },
      {association: 'comentarios',
        include: [{ association: 'usuario' }]
      }
    ]
  })
  .then(function (producto) {
    res.render("product", {
      producto: producto,
      usuario: req.session.usuario});
})
  .catch(function (error) {
    res.send("Error de obtener el producto");
  });
},

  agregarProducto: function (req, res) {
    res.render("product-add");
  }

};

module.exports = productController;
