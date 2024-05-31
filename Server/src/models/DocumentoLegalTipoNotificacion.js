import { DataTypes } from 'sequelize';

export default (sequelize) => {
    sequelize.define('DocumentoLegalTipoNotificacion',{
        dia:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        vencido :{
            type: DataTypes.BOOLEAN,
        }
    })
}