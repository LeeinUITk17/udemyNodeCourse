const mongoose=require("mongoose")
const userschema= new mongoose.Schema({
name: String,
age: Number,

})
mongoose.model("user",userschema)