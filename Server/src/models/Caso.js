import { DataTypes } from 'sequelize';

export default (sequlize)=>{
    const Caso=sequlize.define('Caso',{
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
    return Caso
}