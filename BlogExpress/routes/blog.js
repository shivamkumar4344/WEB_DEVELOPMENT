const express = require("express");
const router = express.Router();
const path = require("path");
const blogs = require("../data/blog2");
router.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,"../templates/index.html"));
})

router.get('/blogs',(req,res)=>{
    blogs.forEach(e=>{
        console.log(e.title);
    })
    res.sendFile(path.join(__dirname,"../templates/blogs.html"));
})
module.exports = router;