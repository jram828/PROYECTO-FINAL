const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('DocumentoLegal', {
        urlDocumento:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}