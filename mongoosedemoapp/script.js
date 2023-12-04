const mongoose=require('mongoose')
mongoose.connect(
    "mongoose://localhost/testdb",()=>{
        console.log('connected!!');
    },error=>console.error(error)
)