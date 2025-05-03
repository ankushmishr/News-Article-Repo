import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("DataBase Connet Succesefully")
}).catch((err)=>{
console.log(err)
})
const app =express();
app.listen(3000,()=>{
    console.log("The server is up on 3000!!")
})