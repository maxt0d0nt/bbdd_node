const { config } = require("../../.sequelizerc")

module.exports = function(sequelize, dataType) {
    let alias = "autor";

    let cols = {
        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: dataType.STRING
        },

        lastName: {
            type: dataType.STRING
        }
    };

    let config = {
        tableName: "author",
        timestamp: false
    }

    let autor = sequelize.define(alias, cols, config);

    autor.associate = function(models){
        autor.belongToMany(models.libro, {
            as: "libros",
            through: "autor_libro", //es una tabla intermedia
            foreignKey: "author_id",
            otherKey: "libros_id",
            timestamp: false
        });

    return autor;}}