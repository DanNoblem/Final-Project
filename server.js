const express = require("express");
const mongoose = require("mongoose");
const app = express();
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://DanNoble:sEIszJowH3ELeIg8@recipecluster.geinzyi.mongodb.net/?retryWrites=true&w=majority'

async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error){
        console.error(error);
    }

    const collection = client.db("<dbname>").collection("<collectionname>");
}

connect();

app.listen(8000, () => {
    console.log("Server started on port 8000")
});

