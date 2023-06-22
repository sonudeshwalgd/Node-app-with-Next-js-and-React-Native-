import mongoose from "mongoose";

const user=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    
})

mongoose.models={}

export const userModel= mongoose.model("admin credentials",user)