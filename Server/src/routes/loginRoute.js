import { Router } from "express";
import { loginHandler, loginHandlerGoogle } from '../handlers/loginHandler.js'

const loginRouter = Router();

loginRouter.get("/", loginHandler);
loginRouter.get("/google", loginHandlerGoogle);

export default loginRouter