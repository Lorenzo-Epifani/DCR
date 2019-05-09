var express = require('express');
var router = express.Router();
var MongoClient = require ('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'DCR';

// Create a new MongoClient
const client = new MongoClient(url,/* remove to read the option */ {useNewUrlParser: true});

/* GET users listing. */
router.get('/dBtest', function (req,res) {
  var resultArray = [];
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
  });
});

module.exports = router;

