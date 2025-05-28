module.exports = function (sequelize, dataTypes) {
    let alias = 'Usuario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED,
        },
        email: {
            type: dataTypes.STRING(255),
            unique: true, 
        },
        usuario: {
            type: dataTypes.STRING(255),
        },
        contraseña: {
            type: dataTypes.STRING(255),
        },
        fecha: {
            type: dataTypes.DATEONLY,
        },
        dni: {
            type: dataTypes.INTEGER.UNSIGNED,
            unique: true,
        },
        fotodeperfil: {
            type: dataTypes.STRING(255),
        },
        created_at: {
            type: dataTypes.DATE,
    
        },
        updated_at: {
            type: dataTypes.DATE,
        
        },
        deleted_at: {
            type: dataTypes.DATE,
        }
    };

    let config = {
        tableName: 'usuarios',
        timestamps: false,
        underscored: true
             
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
    