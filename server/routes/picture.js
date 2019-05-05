var express = require('express');
var router = express.Router();
var Picture = require('../model/picture');


/* GET users listing. */
router.get('/dBtest', function (req,res) {
   
  Picture.findAll().then(picture => {
      res.send(picture);
  });
});

module.exports = router;

