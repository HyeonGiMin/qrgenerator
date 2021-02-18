var models = require('../model');

module.exports=(sequelize,DataTypes)=>{
    const QRLog =sequelize.define('QRLog',{
        _id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        userNo:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{model:'RegUser',key:'_id'}
        },
        name:{
            type:DataTypes.STRING(20),
            allowNull:false
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        phone:{
            type:DataTypes.STRING(50),
            allowNull:false
        }
    },{
        timestamps:true
    })
    
 
    return QRLog
}