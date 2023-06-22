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
                }
            }]
        }]
    }],

})

export const department=mongoose.model("department",classSchema)