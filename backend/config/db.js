import mongoose from 'mongoose';

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://akankshasalke:Akanksha02@cluster0.qtkeb.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}

//Connects backend to the MongoDB database.