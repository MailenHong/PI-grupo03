module.exports = function (sequelize, dataTypes) {
    let alias = 'Comentario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
            type: dataTypes.INTEGER.UNSIGNED,
        },
        producto_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true,
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true,
        },
        texto: {
            type: dataTypes.TEXT,
        },
        created_at: {
            type: dataTypes.DATE,
            notNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            notNull: true,
        },
        deleted_at: {
            type: dataTypes.DATE,
        }
    };
    
    let config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: true
    };


    let Comentario = sequelize.define(alias, cols, config);
    return Comentario;
}
