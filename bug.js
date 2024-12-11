```javascript
// Incorrect use of $inc operator in MongoDB update query
db.collection('myCollection').updateOne( { "_id": ObjectId("6519623a60f697657e9a9d1a") }, { $inc: { quantity: -1 } } );
```