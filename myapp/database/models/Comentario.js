module.exports = function (sequelize, dataTypes) {
    let alias = 'Comentario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED,
        },
        producto_id: {
            type: dataTypes.INTEGER.UNSIGNED,
           
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED,
       
        },
        texto: {
            type: dataTypes.TEXT,
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
        tableName: 'comentarios',
        timestamps: false,
        underscored: true
    };
    
    let Comentario = sequelize.define(alias, cols, config);
    
    Comentario.associate = function(models){
        Comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: 'usuario_id'
        });

        Comentario.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: "producto_id"
        });
    };
    /*Comentario.associate = function (models) {
        Comentario.belongsToMany(models.Usuario, {
            as: "usuarios",
            through: "UsuarioComentario",
            foreignKey: "comentario_id",
            otherKey: "usuario_id"
        });

         Comentario.belongsToMany(models.Producto,{
            as:"productos",
            through: "ComentarioProducto",
            foreignKey: "comentario_id",
            otherKey: "producto_id"
    });
    };
  */
    return Comentario;
}
