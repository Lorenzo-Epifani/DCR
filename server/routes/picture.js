var express = require('express');
var router = express.Router();
var MongoClient = require ('mongodb').MongoClient;
var driver = require('../persistent/mongodriver')
var assert = require('assert');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'DCR';

// Create a new MongoClient
const client = new MongoClient(url,/* remove to read the option */ {useNewUrlParser: true});

/* GET users listing. */
router.get('/dBtest', function (req,res) {
 /* var resultArray = [];
  client.connect(function(err) {

  assert.equal(null,err);
  const db = client.db(dbName);
  var cursor = db.collection('pic').find();
  cursor.forEach(function(doc,err){
      assert.equal(null,err);
      resultArray.push(doc);
      }, function(){
        //client.close();
        res.send(resultArray);
      });
  }); */
driver.startconnect(function(db){
  driver.findAll(db,function(dbres){
    res.send(dbres)

    })
  })
});

/* GET users listing. */
router.post('/Search', function (req,res) {
  console.log(req.body)
 var exp=req.body.FormData ///TEST; GET FROM REQUEST BODY
  driver.startconnect(function(db){
   driver.generalFind(db,exp,function(dbres){
     res.send(dbres)
 
     })
   })
 });

 router.get('/load/:rel', function(req, res){
  var exp = req.params.rel;
  
  driver.startconnect(function(db){
    driver.findPic(db,exp,function(dbres){
      console.log( dbres[0].rel)
      res.sendFile(dbres[0].rel, { root: __dirname+"/db_pic/" })
      })
    })


  });

module.exports = router;

