var express = require('express');
var router = express.Router();
var {LoginUser,RegUser} =require('../model');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let userNo=req.params.id

  RegUser.findOne({
    where:{'_id':userNo}
  }).then((data)=>{
     console.log(data)
      res.json(data)
  })
});

module.exports = router;
