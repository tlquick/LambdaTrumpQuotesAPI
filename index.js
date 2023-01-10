if(process.env.NODE_ENV != 'production'){
  require('dotenv').config();
}
const MongoClient = require("mongodb").MongoClient;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = await client.db("Trump"); //or Trump?

  cachedDb = db;
  return db;
}
exports.handler = async function (event, context) {
  //just get 1 random quote from the db
    try {
      const db = await connectToDatabase();
      const quotes = await db.collection("quotes").find({}).limit(20).toArray();
      const random = (Math.floor((Math.random() * quotes.length) + 1));
      data = quotes[random];
      console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify({ topic: data.topic, year: data.year,  quote: data.quote})
    };
  } catch (err) {
    console.log(err); // output to  function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};