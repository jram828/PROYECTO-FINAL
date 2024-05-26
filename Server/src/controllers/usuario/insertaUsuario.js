
const { Usuario } = require('../../DB')

const crearUsuario = async (correo, password, imagen,rol) => {
  const newUsuario = await Usuario.create({
    correo,
    password,
    imagen,
    rol
  });
  console.log(newUsuario);
  return {
    ...newUsuario.toJSON(),
  };
};

module.exports = {
  crearUsuario,
};
