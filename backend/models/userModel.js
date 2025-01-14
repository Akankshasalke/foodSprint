import mongoose from 'mongoose';
//used to interact with a MongoDB database
const userSchema=new mongoose.Schema({
    name:{type:String ,required:true},
    email:{type:String ,required:true,unique:true}, 
    password:{type:String ,required:true},
    cartData:{type:Object,default:{}}

},{minimize:false})

//minimize:false->Prevents Mongoose from removing empty objects from cartData. For example, if cartData is {}, it will remain {} instead of being omitted from the document.

const userModel=mongoose.models.user || mongoose.model("user",userSchema);

//If the "user" model already exists in mongoose.models, it uses that existing model.
//Otherwise, it creates a new model with mongoose.model("user", userSchema)

export default userModel;