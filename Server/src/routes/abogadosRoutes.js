const { Router } = require("express");
const {
  getAbogadosHandler,
  postAbogadosHandler,
  getAbogadoDetailHandler,
  deleteAbogadoHandler,
} = require("../handlers/abogadosHandlers");

const abogadosRouter = Router();

abogadosRouter.get("/", getAbogadosHandler);

abogadosRouter.get("/cedulaAbogado", getAbogadoDetailHandler);

abogadosRouter.post("/", postAbogadosHandler);

abogadosRouter.post("/delete", deleteAbogadoHandler);

module.exports = abogadosRouter;
