import { department } from "@/models/department" 
import { connectDB } from "@/utils/connectDB"
// import { MongoClient } from 'mongodb'

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// const dbName = 'school';

const  deleteDepartment=async(req,res)=>{
   
//     await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection('departments');
//   console.log(await collection.find({}).toArray())


    if(req.method!="DELETE") return res.status(400).send({error:true,message:"Check for method"})
   const aa= await connectDB()
//    console.log("aa.Collection-------------------------------------------------------")
//    console.log(aa.db("school").collection("department").find({}).toArray())

    const {department_ID,student_ID,section_ID}=req.query

    const arr =await department.findOne({_id:department_ID})

    arr.department[0].section.forEach(sectionList => {
        if(sectionList._id==section_ID){
            sectionList.StudentList=sectionList.StudentList.filter(student=>student._id!=student_ID)
        }
    });

    await arr.save()
    

    res.status(200).send({success:true,message:"koay"})

} 


export default deleteDepartment
