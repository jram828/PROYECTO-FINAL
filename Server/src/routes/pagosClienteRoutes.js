const { Router } = require("express");
const {
  postPagosClientesHandler,
  getPagosClientesHandler,
} = require("../handlers/pagosHandlers");

const pagosClientesRouter = Router();

pagosClientesRouter.get("/", getPagosClientesHandler);

pagosClientesRouter.post("/", postPagosClientesHandler);

module.exports = pagosClientesRouter;
