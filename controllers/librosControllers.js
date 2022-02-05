let db = require("../database/models");

let librosController = {

    crear: function (req, res){
        db.genero.findAll()
        .then(function(generos){
                return res.render("listadoLibro", {generos: generos});
        
           }
       },
        }



module.exports = librosController