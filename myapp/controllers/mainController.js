const datos = require('../db/datos');

const mainController = {
    index: function(req,res,next){
        res.render('index', {
            productos: datos.productos,
            usuario: datos.usuario
        });
    }
};
module.exports = mainController;