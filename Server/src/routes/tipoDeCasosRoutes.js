const { Router } = require("express");
const { postTipoDeCasoHandler, getTipoDeCasoHandler } = require("../handlers/tipoDeCasosHandlers");

const consultaRouter = Router();

consultaRouter.get("/", getTipoDeCasoHandler);

consultaRouter.post("/", postTipoDeCasoHandler);

//consultaRouter.post("/delete", deleteConsultaHandler);

module.exports = consultaRouter; 