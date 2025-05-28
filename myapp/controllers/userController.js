const datos = require('../database/models');
const bcryptjs = require('bcryptjs');

const userController = {
  show: function(req,res){
    if (req.session.usuario !== undefined){
      return res.redirect('/profile' + req.session.usuario.id)
    } else {
      return res.render('register', {error: {}} );
    }
  },

  create: function(req,res){
    let usuario = req.body.usuario;
    let email = req.body.email;
    let password = req.body.password;
    let date = req.body.date;
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
    if (password == "" || password.length < 3){
      error.password = "La contraseña es obligatoria y debe tener al menos 3 caracteres"
      existenErrores = true;
    }
    if (date == ""){
      error.date = "La fecha de nacimiento es obligatoria";
      existenErrores = true;
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
      password: bcryptjs.hashSync(password,10),
    };
     datos.Usuario.create(newUser)
      .then(function(results){
       return res.redirect('/users/login');
    })
    .catch(function(err){
      res.send(err);
    });
  });
  
    
  },
 
}

  

module.exports = userController;