import mongoose from "mongoose";

const staff=new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    password:{
        type:String,
        default:Math.random()
    },
    authenticated:{
        type:Boolean,
        default:false
    },
    active:{
        type:Boolean,
        default:true
    },
    OTP:{
        type:Number,
        default:123
    },
    OTPExpireAt:{
        type:Date
    },
    role:{
        type:String,
        default:"staff"
    },

    data:[{
        date:String,
        data:{
           
    
        }
    }]
})

mongoose.models={}
export const staffDetailModel=mongoose.model("student and staff",staff)