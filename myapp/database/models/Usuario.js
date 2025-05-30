module.exports = function (sequelize, DataTypes) {
    let alias = 'Usuario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        email: {
            type: DataTypes.STRING(255),
            unique: true, 
        },
        usuario: {
            type: DataTypes.STRING(255),
        },
        contrasena: {
            type: DataTypes.STRING(255),
        },
        fecha: {
            type: DataTypes.DATEONLY,
        },
        dni: {
            type: DataTypes.INTEGER.UNSIGNED,
            unique: true,
        },
        fotodeperfil: {
            type: DataTypes.STRING(255),
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
        tableName: 'usuarios',
        timestamps: true,
        underscored: false
             
    };

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, 
            {
             as: 'productos',
             foreignKey: 'usuario_id'
        });

        Usuario.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'usuario_id'
        });
    };

    return Usuario;
};
    