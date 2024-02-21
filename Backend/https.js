const http = require("http");
const myServer = http.createServer((req,res) =>
{
    console.log("New requset received!");
    res.end("Hello Shivam How are you??");
});

myServer.listen(5000,()=>
{
    console.log("Server is starting");
})