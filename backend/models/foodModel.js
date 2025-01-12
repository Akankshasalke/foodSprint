import mongoose from 'mongoose';

// define the structure of the food items stored in the database.
const foodSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        description:{type:String,required:true},
        price:{type:Number,required:true},
        image:{type:String,required:true},
        category:{type:String,required:true}
    }
)


const foodModel=mongoose.models.food || mongoose.model("food",foodSchema)

//A tool to interact with the database
//used when  adding, updating, deleting, or retrieving food data in the backend.

export default foodModel;