import { Router } from "express"
import { getCasoxMesHandler } from '../handlers/dashboardHandlers.js'

const dashboardRouter = Router();

abogadosRouter.get("/casosxMes", getCasoxMesHandler);

export { dashboardRouter }