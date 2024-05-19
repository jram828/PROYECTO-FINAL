const { Router } = require("express");
const abogadosRouter = require("./abogadosRoutes");
const clientesRoutes = require('../routes/clienteRoutes');
const consultaRouter = require("./consultaRoutes");
const tipoDeCasosRouter=require('./tipoDeCasosRoutes')
const casosRouter=require('./casosRoutes')
const loginRouter = require('./../routes/loginRoute')
const usuariosRouter = require("./../routes/usuariosRoutes");
const paymentsRouter = require("./../routes/paymentsRoutes");
const citasRouter = require("./../routes/citasRoutes");
const router = Router();

router.use("/abogados", abogadosRouter);
router.use("/clientes", clientesRoutes);
router.use("/consultas", consultaRouter);
router.use("/tiposdecasos",tipoDeCasosRouter)
router.use("/casos",casosRouter)
router.use("/login",loginRouter)
router.use("/usuarios", usuariosRouter);
router.use("/pagos", paymentsRouter);
router.use("/citas", citasRouter);

module.exports = router;