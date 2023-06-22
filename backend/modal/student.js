import mongoose from "mongoose";
import jwt from "jsonwebtoken" 
import bcrypt from "bcrypt"

const student=new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    role:String,
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
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post' }
    ],
    data:[{
        date:String,
        data:{
            attendance:Boolean,
    
        }
    }]
})

student.methods.OTPGenerate=function(){
    this.OTP=Math.ceil(Math.random()*10000),
    this.OTPExpireAt=new Date().getTime()+5*60*1000
}
student.methods.generateToken=async function(){
    return jwt.sign({_id:this._id},"secretkeyhjhjhjhjjh")
}

student.methods.compairPassword=async function(password){
  return await  bcrypt.compare(password,this.password)
}

student.pre("save",async function (next){
    if (!this.isModified("password")) return next();
    const salt= await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
    next()

})


export const studentSchema=mongoose.model("student and staff",student)