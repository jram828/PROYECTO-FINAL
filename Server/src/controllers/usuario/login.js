const { Cliente, Abogado } = require("../../DB");

const getLogin = async (password, email) => {
  const loginC = await Cliente.findOne({
    where: {
      correo: email,
      password: password,
    },
  });
  if (!loginC) {
    const loginA = await Abogado.findOne({
      where: {
        correo: email,
        password: password,
      },
    });
    if (!loginA) throw new Error("Password o email inválido");
    else
      return {
        access: true,
        usuario: loginA.correo,
        perfil: "abogado",
      };
  } else {
    return {
      access: true,
      usuario: loginC.correo,
      perfil: "cliente",
    };
  }
};

module.exports = {
  getLogin,
};
