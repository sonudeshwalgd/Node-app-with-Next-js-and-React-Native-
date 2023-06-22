import { connectDB } from "@/utils/connectDB"
import { staffModel } from "@/models/staffList"

const  deleteStaff=async(req,res)=>{
    if(req.method!="DELETE") return res.status(400).send({error:true,message:"Check for method"})
    connectDB()
    const {staff_ID}=req.query
   const data=await  staffModel.deleteOne({_id:staff_ID})
    res.status(200).send({success:true,message:data})
} 

export default deleteStaff
