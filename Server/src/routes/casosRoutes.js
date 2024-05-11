const { Router } = require("express");
const { createCasosHandler,getCasoHandler } = require("../handlers/casosHandlers");

const casosRouter = Router();

casosRouter.post("/", createCasosHandler);

casosRouter.get("/", getCasoHandler);

module.exports = casosRouter; 
