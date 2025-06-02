let db = require('../database/models');
let op = db.Sequelize.Op;


const mainController = {
    index: function (req, res) {
        db.Producto.findAll({
            include: [{ association: "usuario" }, {association: "comentarios" }]
        })


        .then(function (resultados) {
            return res.render("index", { data: resultados});
        })
        .catch(function (error) {
            return res.send(error);
        })
    },


    searchResults: function (req, res) {
        let productoBuscado = req.query.search;


        db.Producto.findAll({
            where: [
                { nombre: { [op.like]: "%" + productoBuscado + "%" } }
            ],
            include: [{ association: "usuario" }, {association: "comentarios"} ]
        })
       
        .then(function (resultados) {
            return res.render('search-results', { data: resultados , busqueda: productoBuscado})
        })
        .catch(function (error) {
            return res.send(error);
        })
     }
};


module.exports = mainController;
