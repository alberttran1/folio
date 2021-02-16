const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Alberttran1:Cheekypoop123@cluster0.mllx6.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

// client.connect().then(result => {
//     const database = client.db("test");
//     const collection = database.collection("recipes");
//     console.log(result);
// }, error => {
//     console.error(error);
// });


(async () => {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("recipes");
    const result = await collection.insertOne({
        "name":"Chocolate Cookies",
        "ingredients": ["Eggs","Flour","Chocolate"]
    });
    console.log(result.insertedId);
    client.close();
})();