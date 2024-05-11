const { DataTypes } = require('sequelize');

module.exports = (sequlize)=>{
    sequlize.define('Caso',{
        fecha:{
            type: DataTypes.DATE,
            allowNull: false
        },
        fechaFin:{
            type: DataTypes.DATE,
            allowNull: false
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