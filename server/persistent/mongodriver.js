const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'DCR';

// Create a new MongoClient
const client = new MongoClient(url,/* remove to read the option */ {useNewUrlParser: true});

// Use connect method to connect to the Server
function startconnect (callback){

    client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to Mongodb");
    const db = client.db(dbName);
    const col =db.collection('pic')
    callback(db)
    
    });
};
//QUERIES-----####-----####-----####-----####-----####-----####-----####-----####-----####-----####-----####-----####-----####-----####

const findAll = function(db, callback) {  //GETALL
  var resultArray = [];
  var cursor = db.collection('pic').find();
  cursor.forEach(function(doc,err){
    assert.equal(null,err);
    resultArray.push(doc);
    }, function(){
      //client.close();
      callback(resultArray);
    });
}
//QUERIES-----####-----####-----####-----####-----####-----####-----####-----####-----####-----####-----####-----####-----####-----####

const generalFind = function(db,exp, callback) {            //GENERAL TEXT SEARCH
  var resultArray = [];
  var cursor = db.collection('pic').find({$text:{ $search: exp, $caseSensitive: false}});
  cursor.forEach(function(doc,err){
    assert.equal(null,err);
    resultArray.push(doc);
    }, function(){
      //client.close();
      callback(resultArray);
    });
}
//QUERIES-----####-----####-----####-----####-----####-----####-----####-----####-----####-----####-----####-----####-----####-----####

module.exports.startconnect = startconnect;
module.exports.findAll = findAll;
module.exports.generalFind = generalFind;
