module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('LoginUser',{
        _id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING(20),
            allowNull:false
        }
    },{
        timestamps:false
    })
}