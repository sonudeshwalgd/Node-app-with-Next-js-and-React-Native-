import express from "express"
import {config}  from "dotenv"
import userAuthRoutes from "./routes/userRoute.js"; 
import homepageRoutes from "./routes/homeRoute.js"; 
import studentRoutes from "./routes/studentRoute.js"; 
import adminRoutes from "./routes/admin.js"; 
import mongooseDatabaseConnection from "./config/databaseConnection.js"
import cors from "cors"
import cloudinary from "cloudinary"
import postRoutes from "./routes/postRoutes.js";
import fileUpload from "express-fileupload";

// Configuration 
config({
    path:"./config/config.env"
})

cloudinary.config({
  cloud_name: "dlzigjcjr",
  api_key: "425312783764852",
  api_secret: "QujQ7GGOPwPGTqizy1q6CHIrsNY"
});
const app=express()
app.use(cors({origin:"*"}))
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended:true}))
app.use(fileUpload({
  useTempFiles:true,
  limits:{fileSize:50*1024*1024}
}))

const db=await mongooseDatabaseConnection()

app.use("/",homepageRoutes)
app.use("/auth/",userAuthRoutes)
app.use("/admin/",adminRoutes)
app.use("/student/",studentRoutes)
app.use("/post/",postRoutes)



app.get("/test",(req,res)=>{
    res.send("test passes")
})



app.listen(process.env.PORT,()=>console.log("listning on " +process.env.PORT))

