```javascript
// Correct usage of $in operator, handling null values explicitly
db.collection('myCollection').find({ $or: [{ field: { $in: [1, 2] }, field: { $ne: null } }]});
//Alternative approach using $exists
db.collection('myCollection').find({field:{$in:[1,2]}, field:{$exists:true}});
```