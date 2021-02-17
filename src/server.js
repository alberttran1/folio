// const onSubmit = (event) => {
//     event.preventDefault(event);
//     asyncCall();
//   };

// asyncCall();

// async function asyncCall() {
//     await client.connect();
//     const collection = client.db("testDatabase").collection("devices");
//     const result = await collection.insertOne({
//         "name" : "Chocolate Cookies",
//         "ingredients" : ["egg","flour", "chocolate chip"]
//       });
//     console.log(result.insertedId)
//     client.close();
// }


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Alberttran1:Cheekypoop123@cluster0.x4jd1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


(async () => {
  await client.connect();
    const collection = client.db("test").collection("devices");
    await collection.insertOne({
      "name" : "Albert",
      "password" : "Secret"
    });
    client.close();
})();
