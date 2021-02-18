var express = require('express');
const { logger } = require('../config/winston');
var router = express.Router();
var {LoginUser,RegUser,QRLog}=require("../model")
var winston=require("../config/winston");


/* GET home page. */
router.get('/', function(req, res, next) {
  // LoginUser.findAll({where:{_id:1}})
  //   .then((user)=>{
  //     res.json(user)
  //   })

  var session = req.session;

  res.render('login')
});

router.get('/main',(req,res)=>{
 var session = req.session;
 console.log(session.userId)
 var userid=session.userId
  if(session.userId!=null){
    var db=[]
    RegUser.findAll({
      include: [{
        model: QRLog,
        attributes: ['userNo', 'updatedAt']
      }],
      where:{_id:QRLog.userNo}
    }).then(((data)=>{
      console.log(data)
      db=data
    })
    )
    res.render('manage',{userId:userid ,data:db})
  }else{
    // res.render('error')
  }
})

router.get("/reg",(req,res)=>{

  var session = req.session;
  console.log(session.userId)
  var userid=session.userId
  if(session.userId!=null!=null){
    res.render('addUser',{userId:userid})
  }else{
    // res.render('error')
    res.json({
      error:"ERROR"
    })
  }
})
module.exports = router;
