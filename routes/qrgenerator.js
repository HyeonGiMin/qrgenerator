var express = require('express');
var router = express.Router();
var {LoginUser} =require('../model');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  var userNo=req.params.id;
  res.render('qrGenerator',{userNo:userNo})
});


module.exports = router;
