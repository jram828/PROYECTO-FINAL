const { Router } = require("express");

const { clientesDetailHandler, clientesHandler, postClientesHandler, postEliminaClientes,postActualizaClientes, getClientByEmailHandler } = require("../handlers/clientesHandlers");

const clientesRouter = Router();


clientesRouter.get("/", clientesHandler);

<<<<<<< HEAD
=======
clientesRouter.get("/email", getClientByEmailHandler);

>>>>>>> 51d92237903119989773bfccf662e0381c69085c
clientesRouter.get("/:cedulaCliente", clientesDetailHandler);

clientesRouter.post("/", postClientesHandler);

clientesRouter.post("/elimina", postEliminaClientes);

clientesRouter.post("/actualiza", postActualizaClientes);

<<<<<<< HEAD
clientesRouter.get("/email", getClientByEmailHandler);

//clientesRoutes.get("/cedulaCliente", getClientByIDHandler);




module.exports = clientesRouter;

=======

//clientesRoutes.get("/cedulaCliente", getClientByIDHandler);




module.exports = clientesRouter;

>>>>>>> 51d92237903119989773bfccf662e0381c69085c
