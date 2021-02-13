var express = require('express');
const { logger } = require('../config/winston');
var router = express.Router();
var {LoginUser}=require("../model")
var winston=require("../config/winston")


/* GET home page. */
router.get('/', function(req, res, next) {
  // LoginUser.findAll({where:{_id:1}})
  //   .then((user)=>{
  //     res.json(user)
  //   })
  winston.info("TESTLOG")
  res.render('login')
});

module.exports = router;
