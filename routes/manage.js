var express = require('express');
var router = express.Router();
var {LoginUser,RegUser,QRLog}=require("../model")

// /manage

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("!!!")
});

router.get('/test',(req,res)=>{
    res.send("!!")
})

router.get('/modAdmin',(req,res)=>{
    var session = req.session;

    // console.log(session.userId)
    var userid=session.userId
    //  // if(session.userId!=null){
    //    var db=[]
       RegUser.findAll({
       }).then((data)=>{
         console.log(data)
         db=data
         res.render('modAdminpage',{userId:userid ,data:db})
       })
})

module.exports = router;
