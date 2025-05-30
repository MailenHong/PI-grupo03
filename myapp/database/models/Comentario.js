module.exports = function (sequelize, DataTypes) {
    let alias = 'Comentario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        producto_id: {
            type: DataTypes.INTEGER.UNSIGNED,

        },
        usuario_id: {
            type: DataTypes.INTEGER.UNSIGNED,

        },
        texto: {
            type: DataTypes.TEXT,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,

        },
        deletedAt: {
            type: DataTypes.DATE,
        }
    };

    let config = {
        tableName: 'comentarios',
        timestamps: true,

        underscored: false
    };

    let Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuario_id",
        });

        Comentario.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "producto_id",
 
        });
    };

    return Comentario;
}
