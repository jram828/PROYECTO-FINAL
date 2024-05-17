const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('TipoDeCaso',{
        TipoDeCasoid:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1,50]
            }
        },
        activo:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
          }
    })
}