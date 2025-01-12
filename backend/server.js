import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"



//app config
const app=express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())

//db connection

connectDB();

//api endpoints

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
//This code creates an endpoint (/images) to allow users to access files (like images) stored in the uploads folder. It’s useful for making uploaded images available to your frontend.


app.get("/",(req,res)=>{
res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://akankshasalke:Akanksha02@cluster0.qtkeb.mongodb.net/?