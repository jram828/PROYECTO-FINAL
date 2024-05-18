const { Cliente, Abogado } = require("../../DB");

const getClientByPerfil = async () => {
  console.log(nombre, apellido);
  const cliente = await Cliente.findAll({
    attributes: [
      "nombre",
      "apellido",
      "correo",
      [sequelize.literal("'Perfil'"), "Cliente"],
    ],
    where: {
      nombre,
      activo: true,
    },
  });

  const abogado = await Abogado.findAll({
    attributes: [
      "nombre",
      "apellido",
      "correo",
      [sequelize.literal("'Perfil'"), "Abogado"],
    ],
    where: {
      apellido,
      activo: true,
    },
  });

  const perfilConcatenado = cliente.concat(abogado);

  return perfilConcatenado;
};

module.exports = {
  getClientByPerfil,
};
//const getLogin = async (password, email) => {
//   const loginC = await Cliente.findOne({
//     where: {
//       correo: email,
//       password: password,
//     },
//   });
//   if (!loginC) {
//     const loginA = await Abogado.findOne({
//       where: {
//         correo: email,
//         password: password,
//       },
//     });
//     if (!loginA) throw new Error("Password o email inválido");
//     else
//       return {
//         access: true,
//         usuario: loginA.correo,
//         perfil: "abogado",
//       };
//   } else {
//     return {
//       access: true,
//       usuario: loginC.correo,
//       perfil: "cliente",
//     };
//   }
// };
