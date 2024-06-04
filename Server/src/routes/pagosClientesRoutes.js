const { Router } = require("express");
const {
  getPagosClientesHandler,
  postPagosClientesHandler,
} = require("../handlers/pagosClientesHandlers");

const pagosClientesRouter = Router();

pagosClientesRouter.get("/", getPagosClientesHandler);

pagosClientesRouter.post("/", postPagosClientesHandler);

module.exports = {
  pagosClientesRouter,
};
