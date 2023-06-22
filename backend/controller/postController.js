import { v2 as cloudinary } from 'cloudinary';
import { studentSchema } from '../modal/student.js';
import { postModal } from '../modal/post.js';

export const addPost=async(req,res)=>{
        
    const {description,title,userName} =req.body

   const staff=await studentSchema.findOne({name:userName})

    const customData = {
        description,
        title,
        userName
      };
    
    const result=await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        folder: 'posts',
        context: customData
      })

      if(result){
        const post ={url:result.secure_url,data:customData};
     const savedPost=await postModal.create(post)
     console.log(savedPost._id)

        staff.post=[...staff.post ,savedPost._id]

        staff.save()

        return res.status(200).send({message:"okay in post"})
      }else{
       return res.status(500).send({message:err})
      }
      
    
}


export const getPost=async(req,res)=>{
        
    const {userName} =req.body

    const staff=await studentSchema.findOne({name:userName})
   
    const data= await staff.populate({
      path: 'post',
      select:"url data"
    })
     
     if(staff){
      return res.status(200).send({success:true,data:data.post})
       
     }
 
  return res.status(500).send({success:false,data:"Server error"})



    
  
}