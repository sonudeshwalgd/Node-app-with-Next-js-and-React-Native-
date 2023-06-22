import mongoose from "mongoose";
import jwt from "jsonwebtoken" 
import bcrypt from "bcrypt"

const loginSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
        select:false
    },
    name:{
        type:String, 
    },
    token:{
        type:String
    }

})
loginSchema.methods.getToken=function(){
    return jwt.sign({_id:this._id},"secretkeyhjhjhjhjjh")
}


loginSchema.pre("save",async function (next){
    const salt= await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
    next()

})

export const userLoginSchema=mongoose.model("admin", loginSchema)