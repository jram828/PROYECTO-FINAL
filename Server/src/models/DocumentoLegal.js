import { DataTypes } from 'sequelize';

export default (sequelize) => {
    sequelize.define('DocumentoLegal', {
        urlDocumento:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}