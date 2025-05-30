const db = require('../database/models');
let Producto = db.Producto;

const productController = {

  lista: function (req, res) {
    db.Producto.findAll({
    include: [{association:'usuario'}]
  })
      .then(function(productos){
        res.render("listaDeProductos",{productos:productos})
      })
      .catch(error=>{
        console.error(error);
        res.status(500).send("Error no se puede obtener ningun producto");
      });
      
  },


  detalle: function (req, res) {
    Producto.findByPk(req.params.id,{
      include:[
        {association:'usuario'},
        {
          association:'comentarios',
          include:[{association: 'usuario'}]
        }
      ]
    })


    .then(producto => {
      if (producto) {
        res.render('product', { producto });
      } else {
        res.status(404).send("Producto no encontrado");
      }
    })


    .catch(error => {
      console.error(error);
      res.status(500).send("Error al cargar el producto");
    });
  },

  
  agregarProducto: function (req, res) {
    if (req.session.usuarioLogueado) {
      res.render('product-add', { usuario: req.session.usuarioLogueado });
    } else {
      res.redirect('/login');
    }
  }
};

module.exports = productController;
