const { type } = require("express/lib/response");
const { config } = require("../../.sequelizerc")

module.exports = function(sequelize, dataType) {
    let alias = "libro";

    let cols = {
        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: dataType.STRING
        },

        genero_id: {
            type: dataType.INTEGER
        },

        description: {
            type: dataType.TEXT
        }
           
    };

    let config = {
        tableName: "product",
        timestamp: false
    }

    let libro = sequelize.define(alias, cols, config);

    libro.associate = function(models){
        libro.belongToMany(models.genero, {
            as: "genero",
            foreignKey: "genre_id"
        });

        libro.belongToMany(models.autor, {
                as: "autor",
                through: "autor_libro", //es una tabla intermedia
                foreignKey: "libros_id",
                otherKey: "author_id",
                timestamp: false });

    return libro;
}}