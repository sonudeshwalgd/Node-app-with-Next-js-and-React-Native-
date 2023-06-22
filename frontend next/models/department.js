import mongoose from "mongoose";

const classSchema=new mongoose.Schema({

    department:[{
        title:{
            type:String
        },
        section:[{
            sectionTitle:{
                type:String
            },
            StudentList:[{
                name:{
                    type:String
                },
                email:{
                    type:String
                },
                number:{
                    type:String
                },
                
            }]
        }]
    }],

})

mongoose.models={}


export const department=mongoose.model("department",classSchema)