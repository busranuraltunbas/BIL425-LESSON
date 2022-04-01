const  { MongoClient} = require("mongodb")

const client =  new MongoClient (``)

const start = async() => {
    try{
        await client.connect();
        console.log("Database connected")

        await client.db().createCollection("users");
        const users = client.db().collection("users");

        await users.insertOne({name: "Ronaldo", age:37})
    }
    catch(error){
        console.log(error)
    }
}

start()