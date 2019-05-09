const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'DCR';

// Create a new MongoClient
const client = new MongoClient(url,/* remove to read the option */ {useNewUrlParser: true});

// Use connect method to connect to the Server
function startconnect (){

    client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to Mongodb");
    const db = client.db(dbName);
    const col =db.collection('pic')
    findAll(db, function(docs) {
      return docs;
      client.close();
    });

    });
};
//QUERIES
const findAll = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('pic');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

module.exports.startconnect = startconnect;
module.exports.findAll = findAll;

