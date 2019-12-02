var express= require ("express")
const app=express();



app.get("/",function(req,res){
    res.render("Hello world");
})
const port=process.env.PORT||5000
app.listen(5000,()=>{
    console.log("listen to port 5000")
});