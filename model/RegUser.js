module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('RegUser',{
        _id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        phone:{
            type:DataTypes.STRING,
            allowNull:false
        },
        // rfid:{
        //     type:DataTypes.STRING,
        //     allowNull:true
        // }
    },{
        timestamps:false
    })


    return RegUser
}

