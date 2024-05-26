const { Router } = require("express");

const { clientesDetailHandler, clientesHandler, postClientesHandler, postEliminaClientes,postActualizaClientes, getClientByEmailHandler } = require("../handlers/clientesHandlers");

const clientesRouter = Router();


clientesRouter.get("/", clientesHandler);

clientesRouter.get("/:cedulaCliente", clientesDetailHandler);

clientesRouter.post("/", postClientesHandler);

clientesRouter.post("/elimina", postEliminaClientes);

clientesRouter.post("/actualiza", postActualizaClientes);

clientesRouter.get("/email", getClientByEmailHandler);

//clientesRoutes.get("/cedulaCliente", getClientByIDHandler);




module.exports = clientesRouter;

