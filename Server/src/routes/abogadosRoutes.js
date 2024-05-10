const { Router } = require("express");
const { getAbogadosHandler, postAbogadosHandler, getAbogadoDetailHandler } = require("../handlers/abogadosHandlers");

const abogadosRouter = Router();

abogadosRouter.get("/", getAbogadosHandler);

abogadosRouter.get("/cedulaAbogado", getAbogadoDetailHandler);

abogadosRouter.post("/", postAbogadosHandler);

module.exports = abogadosRouter;