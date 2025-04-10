const datos = require('../db/datos')

const userController = {
  profile: function (req,res) {
    res.render('profile', {
        user: datos.usuario
    });
  }
};

module.exports = userController;