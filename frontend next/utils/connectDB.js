import mongoose from "mongoose";

export const connectDB = async () => {
    const da = await mongoose.connect("mongodb://localhost:27017", {
      dbName: "school",
    });
    console.log(`Database Connected on ${da.connection.host}`);
    return da
  };