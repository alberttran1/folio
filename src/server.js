const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Alberttran1:Cheekypoop123@cluster0.x4jd1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


(async () => {
  await client.connect();
    const collection = client.db("test").collection("devices");
    await collection.insertOne({
      "name" : "Albert",
      "password" : "Secret3"
    });
    client.close();
})();
