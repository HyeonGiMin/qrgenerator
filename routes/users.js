var express = require('express');
const session = require('express-session');
var router = express.Router();
var {LoginUser,RegUser} =require('../model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/reg/admin",(req,res)=>{
  res.render('regAdmin');
})

router.get('/reg/user',(req,res)=>{
  res.render('regUser');
})

router.post('/',function(req,res){
  var body=req.body;
  var session = req.session;
  console.log(body)
  LoginUser.findOne({where:{id:body.id,password:body.password}})
    .then((data)=>{

      if(data!=null){
        var user =data.dataValues.id
        session.userId=user
        res.json(({
          "Success":true
        }))
      }else{
        res.json(({
          "Success":false
        }))
      }
     
    })
})

//사용자 등록
router.post('/userReg',(req,res)=>{
  var body=req.body;
  var session = req.session;
  var userName=body.name;
  var userAge=body.age;
  var userPhone=body.phone;
  console.log(body)

  RegUser.create({name: userName, age: userAge ,phone:userPhone})
  .then(result => {
    console.log(result)
    res.json({
      "Success":true
    });
  })
  .catch(err => {
    res.json(({
      "Success":false
    }))
  });
})


router.get('/logUser',(req,res)=>{
  
})

module.exports = router;
