const { Router } = require("express");
const agregarProducto = require("./controllers/admin_productos/agregarProductos");
const obtenerProducto = require("./controllers/admin_productos/obtenerProductos");
const updateModificarProducto = require("./controllers/admin_productos/updateProductos");
const borrarBorrarProducto = require("./controllers/admin_productos/borrarProductos");
const getUsers = require("./controllers/admin_productos/getUsers");
const getCategorias = require("./controllers/admin_productos/categoriasProduc");
const getOrdenes = require("./controllers/admin_productos/ordenes");
const getventas = require("./controllers/admin_productos/ventas");
const getTransacciones = require("./controllers/admin_productos/transaciones");
const hardCodeoPedidos = require("../Routes/controllers/user_cuenta/hardCodePedidos")
const pedidosAdmin = require('../Routes/controllers/user_cuenta/pedidosAdmin')

const { checkAuth } = require("../middleware/authMiddleware");
const {
  checkRolAdminMiddleware,
} = require("../middleware/checkRolAdminMiddleware");

const router = Router();

router.use("/users", [checkAuth, checkRolAdminMiddleware], getUsers);
router.use("/ordenes", [checkAuth, checkRolAdminMiddleware], getOrdenes);
router.use("/ventas", [checkAuth, checkRolAdminMiddleware], getventas);
router.use(
  "/transacciones",
  [checkAuth, checkRolAdminMiddleware],
  getTransacciones
);
router.use("/categorias", [checkAuth, checkRolAdminMiddleware], getCategorias);
router.use("/crear", [checkAuth, checkRolAdminMiddleware], agregarProducto);
router.use("/obtener", [checkAuth, checkRolAdminMiddleware], obtenerProducto);
router.use("/pedidos", hardCodeoPedidos);
router.use(
  "/modificar",
  [checkAuth, checkRolAdminMiddleware],
  updateModificarProducto
);
router.use(
  "/borrar",
  [checkAuth, checkRolAdminMiddleware],
  borrarBorrarProducto
);
router.use('/pedidosAdmin',pedidosAdmin)

module.exports = router;
