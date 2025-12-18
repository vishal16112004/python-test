import express from 'express';
const app=express();
import sum from './sum.js';
const port=8000;
 app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
app.get("/",async (req,res)=>{
    res.status(200);
    res.json({
        message:"Server is up and running"
    });
 });
 app.get("/home",async (req,res)=>{
    res.status(200);
    res.json({
        message:"hello world"
    });
 })
 app.post("/",(req,res)=>{
    res.send("post request is send");
 })
 app.get("/sum/:a/:b",async(req,res)=>{
    const {a,b}=req.params;
    res.json({
        ans:sum(parseInt(a),parseInt(b))
    })
    
 })