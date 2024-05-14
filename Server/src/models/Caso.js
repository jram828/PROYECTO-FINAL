const { DataTypes } = require('sequelize');

module.exports = (sequlize)=>{
    sequlize.define('Caso',{
        idCaso: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha:{
            type: DataTypes.DATE,
            allowNull: false
        },
        fechaFin:{
            type: DataTypes.DATE,
            allowNull: true
        },
        descripcion:{
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                len: [1,100]
            }
        }
    })
}