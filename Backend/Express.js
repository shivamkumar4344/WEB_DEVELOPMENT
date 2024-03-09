const express = require("express");
const app = express();
const path = require("path");
app.get('/',(req,res)=>{
    res.send("Hello World!");
})

app.post('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
    // res.send("about");
    // res.json({
    //     "Name":"Shivam",
    //     "Age":20,
    // });
})

app.get("/:name",(req,res)=>{
    res.send("MY NAME IS : "+req.params.name);
})

app.listen(3000,()=>{
    console.log(`App is listening at port 3000`);
})