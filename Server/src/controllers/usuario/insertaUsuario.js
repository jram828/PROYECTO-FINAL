
const { Usuario } = require('../../DB')

const crearUsuario = async (correo, password, rol, imagen) => {
  const newUsuario = await Usuario.create({
    correo,
    password,
    rol,
    imagen,
  });
  console.log(newUsuario);
  return {
    ...newUsuario.toJSON(),
  };
};

module.exports = {
  crearUsuario,
};
