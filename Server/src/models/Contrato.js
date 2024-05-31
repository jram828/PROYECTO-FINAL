import { DataTypes } from 'sequelize';

export default (sequelize) => {
    sequelize.define('Contrato', {
        archivo:{
            type: DataTypes.STRING,
            unique: true
        }
    })
}