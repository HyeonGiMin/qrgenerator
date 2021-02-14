module.exports=(sequelize,DataTypes)=>{
    const RegUser =sequelize.define('RegUser',{
        _id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING(20),
            allowNull:false
        },
        age:{
            tyep:DataTypes.STRING(20),
            allowNull:false
        },
        phone:{
            type:DataTypes.STRING(50),
            allowNull:false
        }
    },{
        timestamps:false
    })

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
            tyep:DataTypes.STRING(20),
            allowNull:false
        },
        phone:{
            type:DataTypes.STRING(50),
            allowNull:false
        }
    },{
        timestamps:true
    })

    RegUser.hasMany(QRLog)

    return {
        QRLog,RegUser
    }
}

