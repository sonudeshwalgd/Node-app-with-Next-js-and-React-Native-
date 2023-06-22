import mongoose from "mongoose";


 const mongooseDatabaseConnection = async ()=>{
  try{
    const db=await  mongoose.connect(process.env.mongoose_URI)
  
    console.log("Success connected to database  "+db.connection.host)
    return db

  }
  catch(err){
    console.log("Error while connecting to database connection "+err)
    process.exit(1)
  
  }

}

export default mongooseDatabaseConnection