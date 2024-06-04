import { Router } from "express";
import { getAbogadosHandler, postAbogadosHandler, getAbogadoDetailHandler, deleteAbogadoHandler } from "../handlers/abogadosHandlers.js";

const abogadosRouter = Router();

abogadosRouter.get("/", getAbogadosHandler);

abogadosRouter.get("/cedulaAbogado", getAbogadoDetailHandler);

abogadosRouter.post("/", postAbogadosHandler);

abogadosRouter.post("/delete", deleteAbogadoHandler );

export default abogadosRouter; 