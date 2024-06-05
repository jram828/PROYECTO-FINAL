import { Router } from "express"
import { getCasoxMesHandler } from '../handlers/dashboardHandlers.js'

const dashboardRouter = Router();

dashboardRouter.get("/casosxMes", getCasoxMesHandler);

export default  dashboardRouter 