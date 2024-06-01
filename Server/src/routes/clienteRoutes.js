import { Router } from "express";
import { clientesDetailHandler, clientesHandler, postClientesHandler, postEliminaClientes,postActualizaClientes, 
    getClientByEmailHandler } from "../handlers/clientesHandlers.js";

const clientesRouter = Router();

clientesRouter.get("/", clientesHandler);

clientesRouter.get("/email", getClientByEmailHandler);

clientesRouter.get("/:cedulaCliente", clientesDetailHandler);

clientesRouter.get("/email", getClientByEmailHandler);

clientesRouter.post("/", postClientesHandler);

clientesRouter.post("/elimina", postEliminaClientes);

clientesRouter.post("/actualiza", postActualizaClientes);

//clientesRoutes.get("/cedulaCliente", getClientByIDHandler);

export default clientesRouter;

