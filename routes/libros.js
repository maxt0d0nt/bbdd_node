var express = require('express');
var router = express.Router();
var librosController = require("../controllers/librosControllers")


//creacion
router.get("/crear", librosController.crear)

module.exports = router;
