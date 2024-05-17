const { Router } = require("express");

const { allUsuarios, postUsuariosHandler } = require("../handlers/usuariosHandlers");

const usuariosRouter = Router();

usuariosRouter.get("/", allUsuarios);

usuariosRouter.post("/", postUsuariosHandler);

//consultaRouter.post("/delete", deleteConsultaHandler);

module.exports = usuariosRouter;
