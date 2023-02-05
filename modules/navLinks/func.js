const { MongoClient, ObjectId } = require("mongodb");

//Mongo stuff
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.q1iz2dv.mongodb.net/testdb?retryWrites=true&w=majority`;
const client = new MongoClient(dbUrl);

//MONGO FUNCTIONS
async function connection() {
  await client.connect();
  db = client.db("testdb"); //select testdb database
  return db;
}
/* Async function to retrieve all links documents from menuLinks collection. */
async function getLinks() {
  db = await connection(); //await result of connection() and store the returned db
  var results = db.collection("navLinks").find({}); //{} as the query means no filter, so select all
  res = await results.toArray();
  return res;
}

async function getMenu() {
  db = await connection(); //await result of connection() and store the returned db
  var results = db.collection("doughnuts").find({}); //{} as the query means no filter, so select all
  res = await results.toArray();
  return res;
}

module.exports = {
  connection,
  getLinks,
  getMenu
};