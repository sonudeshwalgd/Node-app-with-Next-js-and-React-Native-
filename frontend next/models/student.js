import mongoose from "mongoose";

const student=new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    role:{
        type:String,
        default:"student"
    },
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

    data:[{
        date:String,
        data:{
            attendance:String,
    
        }
    }]
})

mongoose.models={}
export const studentSchema=mongoose.model("student and staff",student)