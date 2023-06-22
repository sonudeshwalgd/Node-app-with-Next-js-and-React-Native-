import { staffDetailModel } from "@/models/staff";
import { staffModel } from "@/models/staffList";
import { connectDB } from "@/utils/connectDB"

 const staffAPI=async (req,res)=>{

 try {
    if(req.method=="GET"){
        connectDB()
        const staffList=await staffModel.find({})
        res.status(200).send(staffList)
    }
    if(req.method=="POST"){
        connectDB()
        const {staff}=req.body
        staff.forEach(staffWise => {
            staffModel.create(staffWise)
            staffDetailModel.create(staffWise)
        });
        res.status(200).send()
    }













} catch (error) {
    console.log(error)
    res.status(500).send(error)
}



}
export default staffAPI