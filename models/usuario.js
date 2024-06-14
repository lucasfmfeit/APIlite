const {DataTypes} = require("sequelize")
const sequelize = require("./sequelize")

const usuario = sequelize.define("usuarios",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull:false,
        },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    dataNascimento:{
        type: DataTypes.DATE,
        allowNull: false,
    }
})
usuario.sync({force:false}).then(()=>{
    console.log("Modelo Sincronizado")
})
module.exports = usuario

