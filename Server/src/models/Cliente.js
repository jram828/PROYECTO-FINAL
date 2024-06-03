import { DataTypes } from 'sequelize';

export default (sequelize) => {

  sequelize.define("Cliente", {
    cedulaCliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    correo: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [1, 100],
      },
    },
    telefono: {
      type: DataTypes.STRING,
      unique: true,
    },
    calle: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
      },
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codigoPostal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    imagen: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
