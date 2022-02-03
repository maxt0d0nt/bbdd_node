let db = require("../database/models");

let librosController = {

    crear: function (req, res){
        db.genero.findAll()
            .them(function(generos){
                return res.render("listadoLibros", {generos: generos});
            })
    }

}

module.exports = librosController