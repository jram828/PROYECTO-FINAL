import { DataTypes } from 'sequelize';

export default (sequelize) => {
    sequelize.define('Cotizacion',{
        fecha:{
            type: DataTypes.DATE,
            allowNull: false
        },
        importe:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        fechaVigencia:{
            type: DataTypes.DATE,
            allowNull: false
        }
    })
}