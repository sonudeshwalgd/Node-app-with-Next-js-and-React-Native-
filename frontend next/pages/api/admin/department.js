import { department } from "@/models/department"
import { studentSchema } from "@/models/student"
import { connectDB } from "@/utils/connectDB"


 const getDepartment= async(req,res)=>{
    try {
        if(req.method=="GET"){
            connectDB()
            const data=await department.find({})
            return res.status(200).send(data)
        }
        
    } catch (error) {
        console.log(error)
    }


    try {
        if(req.method=="POST"){
            
            connectDB()
            const data=req.body

            data.department[0].section.map((section)=>{
                section.StudentList.map(async(student)=>{
                   const isStudentExist=await studentSchema.findOne({name:student.name})
                   isStudentExist==null && await studentSchema.create(student).then(()=>console.log("Schema Created 2"))
                })
            })

            const existedDepartment=await department.findOne({"department.title":data.department[0].title})
            if(existedDepartment!=null){
                data.department[0].section.map((section)=>{
                    existedDepartment.department[0].section.map((existingSection)=>{
                        if(section.sectionTitle==existingSection.sectionTitle){
                            existingSection.StudentList=[...existingSection.StudentList,...section.StudentList]
                        }
                    })
                })
                existedDepartment.save()
               return res.status(201).send("okay created")
            }



            await department.create(data).then(()=>console.log("Schema Created "))
            res.status(200).send(" created adminSchema")
        }
    } catch (error) {
        console.log(error)
        
    }
    
     }

     export default getDepartment