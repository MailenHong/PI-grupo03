const datos = require('../db/datos');

const mainController = {
    index: function(req,res){
        res.render('index', {
            productos: datos.productos,
            usuario: datos.usuario
        });
    },
    searchResults: function(req, res){
        res.render('search-results', {
            productos: datos.productos,
        })
    }
};
module.exports = mainController;