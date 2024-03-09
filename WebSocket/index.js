const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const port = 9000;

const server = http.createServer(app);
app.use(express.static(path.resolve("./public")));
app.get("/",(req,res)=>
{
    return res.sendFile("/public/index.html");
});

server.listen(9000,()=>
{
    console.log(`Server started at port: ${port}`);
});