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

  if(session==null){
    res.redirect('/login')
  }else{
    res.redirect('/main')
  }


});

router.get('/login',(req,res)=>{
  res.render('login')
})

router.get('/main',(req,res)=>{
 var session = req.session;
 console.log(session.userId)
 var userid=session.userId
 var userDataList=[];
  // if(session.userId!=null){
    var db=[]
    RegUser.findAll({
      include: [{
        model: QRLog,
        attributes: ['userNo', 'time']
      }],
      // where:{_id:QRLog.userNo}
    }).then((data)=>{
      console.log(data)
      db=data
      console.log(db)
      return new Promise(function(resolve, reject) {
        resolve(db);
      });
    }).then((db)=>{
      console.log("!!")
      //각각의 최신 로그를 가져온다.
      console.log("!!",db)
      
      db.forEach((element,index) => {
        var CreeatedAt
        console.log(element)

        QRLog.findOne({
          attributes: ['_id', 'userNo','time'],
          where:{'userNo':element._id},
          order: [ [ '_id', 'DESC' ]]
        }).then((data)=>{
          console.log(data)
          if(data!=null){
            CreeatedAt=data.dataValues.time.format('yyyy-MM-dd(KS) HH:mm:ss');
          }
          console.log(CreeatedAt)
          var tempData={
            no:element._id,
            name:element.name,
            age:element.age,
            phone:element.phone,
            recent:CreeatedAt
          }
          userDataList.push(tempData)

          //데이타의 길이가 같다면 마지막임을 알 수 있다.
          if(userDataList.length==db.length){
            res.render('manage',{userId:userid ,data:userDataList})
          }
        })
      })
    })
    

  // }else{
  //   // res.render('error')
  // }
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
