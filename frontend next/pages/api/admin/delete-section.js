import { department } from "@/models/department" 
import { connectDB } from "@/utils/connectDB"

const  deleteDepartment=async(req,res)=>{

    if(req.method!="DELETE") return res.status(400).send({error:true,message:"Check for method"})
    await connectDB()

    const {department_ID,section_ID}=req.query

    const arr =await department.findOne({_id:department_ID})

    arr.department[0].section=arr.department[0].section.filter(section=>section._id!=section_ID)
 
    await arr.save()

    res.status(200).send({success:true,message:arr})

} 


export default deleteDepartment
