import {DataTypes} from "sequelize";
import {sequelize2} from "../../src/database/conexion.js";

 export const UsuarioModel = sequelize2.define('usuarioss',{
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellidopat: {
        type: DataTypes.STRING
    },
    apellidomat: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    activo: {
        type: DataTypes.INTEGER
    },
}, {
         tableName: "usuarioss",
         timestamps: false
     }
     );

//dbPostgres.models.modelName

// export default UsuarioModel
