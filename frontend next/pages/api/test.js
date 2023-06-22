import { userModel } from "@/models/admin"
import { connectDB } from "@/utils/connectDB"

const  test=(req,res)=>{
    res.send("kjddj")
    connectDB()

    userModel.create(req.body)


} 

export default test
