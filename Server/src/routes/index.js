import { Router } from  "express";
import abogadosRouter from "./abogadosRoutes.js";
import clientesRoutes from '../routes/clienteRoutes.js';
import consultaRouter from "./consultaRoutes.js";
import tipoDeCasosRouter from "./tipoDeCasosRoutes.js";
import casosRouter from "./casosRoutes.js";
import loginRouter from "./../routes/loginRoute.js";
import usuariosRouter from "./../routes/usuariosRoutes.js";
import paymentsRouter from "./../routes/paymentsRoutes.js";
import citasRouter from "./../routes/citasRoutes.js";
import pagosClientesRouter from "./pagosClienteRoutes.js";

const router = Router();

router.use("/abogados", abogadosRouter);
router.use("/clientes", clientesRoutes);
router.use("/consultas", consultaRouter);
router.use("/tiposdecasos", tipoDeCasosRouter);
router.use("/casos", casosRouter);
router.use("/login", loginRouter);
router.use("/usuarios", usuariosRouter);
router.use("/pagos", paymentsRouter);
router.use("/pagosClientes", pagosClientesRouter);
router.use("/citas", citasRouter);

export default router;
