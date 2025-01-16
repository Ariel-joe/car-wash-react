import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("successfully connected DB!");
        
    } catch (error) {
        console.log(error, "error connecting to db!");
        
    }
}