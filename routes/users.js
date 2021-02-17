var express = require('express');
const session = require('express-session');
var router = express.Router();
var {LoginUser} =require('../model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

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
module.exports = router;
