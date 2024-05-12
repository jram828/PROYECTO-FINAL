const { Router } = require("express");

const {
  clientesDetailHandler,
  clientesHandler,
  postClientesHandler,
  postEliminaClientes,
  postActualizaClientes,
  getClientByEmailHandler,
  getClientByIDHandler,
} = require("../handlers/clientesHandlers");



const clientesRouter = Router();

clientesRouter.get("/email", getClientByEmailHandler);


clientesRouter.get("/", clientesHandler);

// clientesRouter.get("/:id", clientesDetailHandler);

clientesRouter.post("/", postClientesHandler);

clientesRouter.post("/elimina", postEliminaClientes);

clientesRouter.post("/actualiza", postActualizaClientes);

clientesRouter.get("/:cedulaCliente", getClientByIDHandler);

module.exports = clientesRouter;