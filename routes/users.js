var express = require('express');
var router = express.Router();
var {LoginUser} =require('../model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',function(req,res){
  LoginUser.findAll({where:{_id:1}})
    .then((user)=>{
      res.json(user)
    })
})
module.exports = router;
