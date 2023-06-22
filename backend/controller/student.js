import {department as adminSchema } from "../modal/admin.js"
import { studentSchema } from "../modal/student.js"


export const addTodayAttendance= async(req,res)=>{
    
    const data=req.body
    try {
        const user=await studentSchema.findOne({name:data.name})

        if(user?.data==[]){
            user.data=[...user.data,data.data] 
        }
       const indexIfDateExists= user.data.findIndex(dataDayWise=> dataDayWise.date==data.data.date)
       if(indexIfDateExists==-1){
        user.data=[...user.data,data.data]
       }else{
        user.data[indexIfDateExists]=data.data
       }
       await user.save()
    } catch (error) {
        
        res.status(500).send({success:false,message:error})
    }
    res.status(201).send({success:true})
    }


export const studentData=async(req,res)=>{
    const data=req.body
    console.log(data)
try {
    const user=await studentSchema.findOne({name:data.name})
    console.log(user)
    res.status(200).send({success:true,data:user.data})


} catch (error) {
    
}
}    