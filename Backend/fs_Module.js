//file system module allows you to work with file system on your computer.
// writing the file
//synchronous
const fs = require("fs");
fs.writeFileSync("file2.txt","Hello World!");

//asynchronous
fs.writeFileSync("Greet.txt","Hello Shivam!",(err)=>
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("File written");
    }

});

//for appending the file
fs.writeFileSync("Greet.txt"," You are amazing!",{flag:"a"} ,(err)=>
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("File written");
    }
});

