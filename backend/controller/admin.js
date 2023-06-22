import {department as adminSchema } from "./../modal/admin.js"

export const getDepartment= async(req,res)=>{
    
   const data=await adminSchema.find({})

    res.send(data)
    
    }
export const addDepartment= async(req,res)=>{
    
//    const data=await adminSchema.findOne()
    const data=req.body

    await adminSchema.create(data).then(()=>console.log("created bro"))

    res.status(200).send(" created adminSchema")
    
    }