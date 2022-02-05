const { config } = require("../../.sequelizerc")

module.exports = function(sequelize, dataType) {
    let alias = "genero";

    let cols = {
        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        genderName: {
            type: dataType.STRING
        }
    };

    let config = {
        tableName: "gender",
        timestamp: false
    }

    let genero = sequelize.define(alias, cols, config);

    genero.associate = function(models){
        genero.hasMany(models.libro, {
            as: "libros",
            foreignKey: "genre_id"
        });
    }

    return genero;
}