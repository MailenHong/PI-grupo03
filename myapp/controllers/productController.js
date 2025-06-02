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
    
    if (req.session.usuario !== undefined) {
      return res.render("product-add");
    } else {
      return res.render('/', { error: {} });
    }
  },


  comentarios:  function (req, res) {
    
    if (req.session.user != undefined) {
    db.Comentario.create({ 
	      producto_id: req.params.id,
        usuario_id: req.session.user.id,
        texto: req.body.comentario
    })
    .then(function (){
      return res.redirect('/')
    })
    .catch(function (error) {
      res.send("Ocurrió un error al guardar el comentario.");
    });
    } else {
      return res.redirect('/login')
    }
  },
  
  procesarProducto: function (req, res) {
    db.Producto.create({
      usuario_id: req.session.usuario.id,
      imagen: req.body.imagen,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
    })
      .then(function () {
        return res.redirect('/users/profile/' + req.session.usuario.id)
      })

  },
};

  

module.exports = productController;
