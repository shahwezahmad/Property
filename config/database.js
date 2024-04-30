import mongoose from "mongoose";

let connected = false

const connectDB = async () => {
    mongoose.set('strictQuery', true)

    // check if connect 
    if(connected) {
        console.log("DB is already connected")
        return;
    } 

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true
        console.log("Database is connected successfully!")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB