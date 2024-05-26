const { Router } = require("express");
const { createCasosHandler,getCasoHandler, deleteCasoHandler } = require("../handlers/casosHandlers");

const casosRouter = Router();

casosRouter.post("/", createCasosHandler);

casosRouter.post("/findecaso", deleteCasoHandler);

casosRouter.get("/", getCasoHandler);



module.exports = casosRouter; 
