import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"

dotenv.config()
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("DataBase Connet Succesefully")
}).catch((err) => {
    console.log(err)
})

const app = express();
app.use(express.json())
app.listen(3000, () => {
    console.log("The server is up on 3000!!")
})

app.use("/api/auth", authRoutes)
app.use((err,req,res,next)=>{
    const statusCode =err.statusCode ||500

    const message =err.message ||"Internal server error"

    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})