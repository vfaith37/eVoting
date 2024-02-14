//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/BlockVotes';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }); // Add useUnifiedTopology option
mongoose.Promise = global.Promise;
module.exports = mongoose;

// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017';
// const client = new MongoClient(uri, { useUnifiedTopology: true });

// async function connectToMongoDB() {
//     try {
//         await client.connect();
//         console.log('Connected to MongoDB server');
//     } catch (error) {
//         console.error('MongoDB connection error:', error);
//     }
// }

// connectToMongoDB();
