const { Router } = require("express");
const { deleteConsultaHandler, postConsultaHandler, getConsultaHandler } = require("../handlers/consultasHandlers");

const consultaRouter = Router();

consultaRouter.get("/", getConsultaHandler);

consultaRouter.post("/", postConsultaHandler);

consultaRouter.post("/delete", deleteConsultaHandler);

module.exports = consultaRouter; 