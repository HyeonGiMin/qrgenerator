var express = require('express');
var router = express.Router();
var Logging=require('../config/winston')
var {LoginUser,RegUser,QRLog} =require('../model');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let userNo=req.params.id

  RegUser.findOne({
    where:{'_id':userNo}
  }).then((data)=>{
    if(data!=null){
      console.log("!!")
      let qrLog=data.dataValues
      console.log(qrLog)
      Logging.info("CREATE")
      QRLog.create({
        userNo:qrLog._id,
        name:qrLog.name,
        age:qrLog.age,
        phone:qrLog.phone
      }).then((data)=>{
        console.log(data)
        res.send("!!! 성공")
      }).catch((err)=>{
        res.json(err)
      })

    }else{
      let error=""
      res.render('logFail',{Error:error})
    }
  }).catch((error)=>{
    res.render('logFail',{Error:error})
  })
});

module.exports = router;
