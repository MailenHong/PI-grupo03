const datos = require('../db/datos')

const userController = {
  register: function (req,res) {
    res.render('register');
  },
  login: function (req,res) {
    res.render('login');
  },
  profile: function (req,res) {
    res.render('profile', {
        user: datos.usuario
    });
  }
};

module.exports = userController;