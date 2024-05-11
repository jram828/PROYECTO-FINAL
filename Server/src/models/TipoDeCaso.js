const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('TipoDeCaso',{
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1,50]
            }
        }
    })
}