import { models } from "../../DB.js";
import { sendEmailCliente } from "../../utils/emailNotifier.js";

const { Cliente, Abogado } = models;
const getPassword = async (email) => {
  const user = await Cliente.findOne({
    where: {
      correo: email,
    },
  });
  
  if (!user) {
    const user = await Abogado.findOne({
      where: {
        correo: email,
      },
    });
    if (!user) throw new Error("Usuario no encontrado");
    sendEmailCliente(user.nombre, user.correo, "password",user.password);
    return {
      nombre: user.nombre,
      correo: user.correo,
      password: user.password,
    };
  }
  sendEmailCliente(user.nombre, user.correo, "password", user.password);
  return {
    nombre: user.nombre,
    correo: user.correo,
    password: user.password,
  };
};

export { getPassword };
