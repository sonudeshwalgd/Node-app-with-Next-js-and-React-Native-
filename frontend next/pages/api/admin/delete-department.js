import { connectDB } from "@/utils/connectDB"
import { department } from "@/models/department" 

const  deleteDepartment=async(req,res)=>{
    if(req.method!="DELETE") return res.status(400).send({error:true,message:"Check for method"})
    connectDB()
    const {department_ID}=req.query
   const data=await  department.deleteOne({_id:department_ID})
    res.status(200).send({success:true,message:data})
} 

export default deleteDepartment
