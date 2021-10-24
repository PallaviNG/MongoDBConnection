const express=require("express");

const {MongoClient} = require("mongodb");
const app=express();

const connectURL = "mongodb://127.0.0.1:27017/";
const client =new MongoClient(connectURL);
const connect_db="todo";

app.get("/",async function(req,res){
    try{
        await client.connect();
        const db=client.db(connect_db);
        const collection = db.collection('todoList');
        let result=await collection.find({}).toArray();
        res.send({status:true,result});
    }
    catch(error){
        res.send({status:false,error});
    }
});

app.listen(4000,function(){
    console.log("Server is running on port : ",4000);
})