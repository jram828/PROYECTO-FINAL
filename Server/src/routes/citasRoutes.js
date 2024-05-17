const { Router } = require("express");
const { getCitaHandler,postCreateCita } = require("../handlers/citaHandlers");

const casosRouter = Router();

casosRouter.post("/", postCreateCita);

casosRouter.get("/", getCitaHandler);

module.exports = casosRouter; 
