let db = require('../database/models');
let op = db.Sequelize.Op;

const mainController = {
    index: function (req, res) {
        db.Producto.findAll({
            include: [{ association: "usuario" }]
        })

        .then(function (resultados) {
            return res.render("index", { data: resultados});
        })
        .catch(function (error) {
            return res.send(error);
        })
    },

    searchResults: function (req, res) {
        res.render('search-results', {
            productos: datos.productos,
        })
    }
};
module.exports = mainController;