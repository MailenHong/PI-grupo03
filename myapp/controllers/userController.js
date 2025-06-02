const datos = require('../database/models');
const bcryptjs = require('bcryptjs');



const userController = {
  showRegister: function(req,res){
    if (req.session.usuario !== undefined){
      return res.redirect('/users/profile/' + req.session.usuario.id)
    } else {
      return res.render('register', {error: {}} );
    }
  },

  createRegister: function(req,res){
    let usuario = req.body.usuario;
    let email = req.body.email;
    let contrasena = req.body.contrasena;
    let fecha = req.body.fecha;
    let dni = req.body.dni;
    let fotodeperfil = req.body.fotodeperfil;
    let error = {};
    let existenErrores = false;

    if(usuario == ""){
      error.usuario = "El nombre de usuario obligatorio";
      existenErrores = true;
      
    }
    if (email == ""){
      error.email = "El correo electrónico es obligatorio";
      existenErrores = true;
    }
    if (contrasena == "" || contrasena.length < 3){
      error.contrasena = "La contraseña es obligatoria y debe tener al menos 3 caracteres"
      existenErrores = true;
    }
    if (fecha == ""){
      error.fecha = "La fecha de nacimiento es obligatoria";
      existenErrores = true;
    }
    if(dni == ""){
      error.dni = "Campo obligatorio"
      existenErrores= true;
    }
    if (existenErrores){
      return res.render ("register", {error});
    }
    
    datos.Usuario.findOne({ where: { email:email} })
     .then(function(user){
      if (user){
        error.email = "El correo electrónico ya se encuentra registrado!";
        return res.render("register", {error});
      }

     let newUser =  {
      usuario: usuario,
      email: email,
      contrasena: bcryptjs.hashSync(contrasena,10),
      fecha: fecha,
      dni: dni,
      fotodeperfil : fotodeperfil,
    };
     datos.Usuario.create(newUser)
      .then(function(results){
        console.log("se creo usuario")
       return res.redirect('/users/login');
    })
    .catch(function(err){
      res.send(err);
    });
  });

},

showLogin: function(req, res){
  if (req.session.usuario != undefined){
    return res.redirect('/')
  } else {
    return res.render('login', {error: {}} );
  }
 },

 createLogin: function(req,res){
  let email = req.body.email;
  let contrasena = req.body.contrasena;
  let recordarme = req.body.recordarme;
  let error = {};

  datos.Usuario.findOne({where: {email:email}})
   .then(function(user){
     if(user == null){
      error.email = "Este correo no se encuentra registrado!"
      return res.render('login', {error} )
    }

    let validacion = bcryptjs.compareSync(contrasena, user.contrasena)
    if(!validacion){
      error.contrasena = "La contraseña es incorrecta";
      return res.render('login', {error})
    }
    req.session.usuario = user;

    if (recordarme != undefined){
      res.cookie('user', user, {maxAge: 150000});
    }
     return res.redirect('/users/profile/' + req.session.usuario.id)
  });
 },

profile: function (req, res) {

    let userId = req.params.id;

    datos.Usuario.findByPk(userId, {
      include: [{
        association: 'productos',
        include: [{ association: 'comentarios' }]
      }, {association: 'comentarios'}
     ]
    })
      .then(function (usuario) {
        res.render("profile", {
          usuario: usuario,
          productos: usuario.productos,
          total: usuario.productos.length
        });
      })
      .catch(function (error) {
        res.send("Error al obtener perfil del usuario");
      });
  },
  
logout: function(req,res){
  req.session.destroy()
  if (req.cookies.user != undefined){
    res.clearCookie('user')
  }
  res.redirect('/')
}

  
};

  

module.exports = userController;