import mongoose from "mongoose";

const staffSchema=new mongoose.Schema({
    name:String,
    email:String,
    number:String,

})
mongoose.models={}

export const staffModel=mongoose.model("staff",staffSchema)

