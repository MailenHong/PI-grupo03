module.exports = function (sequelize, DataTypes) {
    let alias = "Producto";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,

        },
        usuario_id: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        imagen: {
            type: DataTypes.STRING(255),
        },
        nombre: {
            type: DataTypes.STRING(255),
        },
        descripcion: {
            type: DataTypes.TEXT,
        },
        createdat: {
            type: DataTypes.DATE,
        },
        updatedat: {
            type: DataTypes.DATE,
        },
        deletedat: {
            type: DataTypes.DATE,
        }
    };

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: true
    };

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: "producto_id"
        });

         Producto.hasMany(models.Comentario,{
            as:"comentarios",
            foreignKey: "producto_id"
    });
    };

    return Producto;
};
