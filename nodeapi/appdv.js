const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.send("hello by express");
})
const postRoutes=require('./routes/post');
app.get("/",postRoutes.getPosts);

const port=8080
app.listen(port,()=>{
    console.log(`A nodejs api is listening on port ${port}`);
});