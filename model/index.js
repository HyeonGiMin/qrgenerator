var path = require("path");
const Sequelize = require('sequelize');

var env=process.env.NODE_ENV || "developement";
var config = require(path.join(__dirname,'..','config','db.config.json'))[env];
var db={}

var sequelize= new Sequelize(config.database,config.username,config.password,config);

db.sequelize=sequelize;
db.Sequelize=Sequelize;

db.LoginUser=require("./LoginUser")(sequelize,Sequelize);
db.RegUser=require("./RegUser")(sequelize,Sequelize);
db.QRLog=require("./log")(sequelize,Sequelize);


module.exports =db;