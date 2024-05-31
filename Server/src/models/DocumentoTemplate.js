import { DataTypes } from 'sequelize';

export default (sequelize) => {
    sequelize.define('DocumentoTemplate',{
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,20]
            }
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1,100]
            }
        },
        urlTemplate:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}