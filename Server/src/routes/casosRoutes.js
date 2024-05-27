const { Router } = require("express");
const {
  createCasosHandler,
  getCasoHandler,
  deleteCasoHandler,
  getTipoDeCasoByIdHandler,
} = require("../handlers/casosHandlers");

const casosRouter = Router();

casosRouter.get("/", getCasoHandler);

casosRouter.get("/:idCaso", getTipoDeCasoByIdHandler);

casosRouter.post("/", createCasosHandler);

casosRouter.post("/findecaso", deleteCasoHandler);

module.exports = casosRouter;
