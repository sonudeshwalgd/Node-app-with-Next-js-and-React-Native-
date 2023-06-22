import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    
        url:String,
        data:{
            description:String,
            title:String,
            userName:String
        },
        date:{
          type:Date,
          default:new Date()
        }  
      ,
})

export const postModal=mongoose.model("post",postSchema)