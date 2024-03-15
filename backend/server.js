const express = require("express");
const mongoose = require("mongoose")
const app = express();
const env = require("dotenv");
env.config();

const PORT = process.env.PORT;

const connectDb = async() =>{
    try{
        await mongoose.connect("mongodb+srv://nandhakrishnan:0zlzGBdS7rEEbZ2j@bhuvan.kj0irmq.mongodb.net/?retryWrites=true&w=majority&appName=bhuvan"
        )
        console.log("connected to mongoDB")

    } 
    catch(err){
           console.log(err);
    } 

    
}
connectDb()

    

 

app.listen(PORT, () => {
  console.log("server running on " + PORT);
});
