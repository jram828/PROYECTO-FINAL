const { Router } = require("express");
const { getCitaHandler,postCreateCita } = require("../handlers/citaHandlers");

const citasRouter = Router();

citasRouter.post("/", postCreateCita);

citasRouter.get("/", getCitaHandler);

module.exports = citasRouter; 
