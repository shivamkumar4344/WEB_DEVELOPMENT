const http = require("http");
const myServer = http.createServer((req,res) => {
    console.log("New request received!");
    res.end("HEllO SHIVAM WELCOME TO THE SERVER!!");
});

myServer.listen(5000,()=>
{
    console.log("Server is starting!");
});