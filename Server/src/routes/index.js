const { Router } = require("express");
const abogadosRouter = require("./abogadosRoutes");
const clientesRoutes = require('../routes/clienteRoutes');
const consultaRouter = require("./consultaRoutes");
<<<<<<< HEAD
const tipoDeCasosRouter=require('./tipoDeCasosRoutes')
const casosRouter=require('./casosRoutes')
const loginRouter = require('./../routes/loginRoute')
const usuariosRouter = require("./../routes/usuariosRoutes");
const paymentsRouter = require("./../routes/paymentsRoutes");
const citasRouter = require("./../routes/citasRoutes");
=======
const tipoDeCasosRouter = require("./tipoDeCasosRoutes");
const casosRouter = require("./casosRoutes");
const loginRouter = require("./../routes/loginRoute");
const usuariosRouter = require("./../routes/usuariosRoutes");
const paymentsRouter = require("./../routes/paymentsRoutes");
const citasRouter = require("./../routes/citasRoutes");
const pagosClientesRouter = require("./pagosClienteRoutes");
>>>>>>> 51d92237903119989773bfccf662e0381c69085c
const router = Router();

router.use("/abogados", abogadosRouter);
router.use("/clientes", clientesRoutes);
router.use("/consultas", consultaRouter);
<<<<<<< HEAD
router.use("/tiposdecasos",tipoDeCasosRouter)
router.use("/casos",casosRouter)
router.use("/login",loginRouter)
router.use("/usuarios", usuariosRouter);
router.use("/pagos", paymentsRouter);
=======
router.use("/tiposdecasos", tipoDeCasosRouter);
router.use("/casos", casosRouter);
router.use("/login", loginRouter);
router.use("/usuarios", usuariosRouter);
router.use("/pagos", paymentsRouter);
router.use("/pagosClientes", pagosClientesRouter);
>>>>>>> 51d92237903119989773bfccf662e0381c69085c
router.use("/citas", citasRouter);

module.exports = router;
