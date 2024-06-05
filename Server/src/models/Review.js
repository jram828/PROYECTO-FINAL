import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Review = sequelize.define("Review", {
    reviewId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cedulaCliente: {
      type: DataTypes.INTEGER,
    },
    puntuacion: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
    },
    comentario: {
      type: DataTypes.TEXT,
      //   allowNull: false,
      //   validate: {},
    },
  });
  return Review;
};
