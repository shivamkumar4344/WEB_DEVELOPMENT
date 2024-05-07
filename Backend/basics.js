// let :- value can be updated but can't be reinitialised.
//  var :- value can be updated and variable can be reinitialised. 
// const:-value can't be updated if once declared.

// var arr = [1,2,3,4,5];
// for(let i=0;i<5;i++)
//     {
//         console.log(arr[i]);
//     }

//     console.log(arr);

// function abc(n)
// {
//     console.log("hello world " +n);
// }

// abc(5);

// function factorial(n)
// {
//     let fact = 1;
//     for(let i=1;i<=n;i++)
//         {
//             fact*=i;
//         }
//         return fact;
// }

// console.log("Factorial is "+factorial(5));

//Javascript objects stringyfy and parse also...
// var student = {
//     "name":"Shivam",
//     "sec":"K22YH",
//     "roll":43,
//     "courses":["HTML","CSS","JS"]

// };
// console.log(student);
// var studentTo =  JSON.stringify(student);
// console.log(JSON.stringify(student));

// var pasredInJs = JSON.parse(studentTo);
// console.log(pasredInJs);


// arr = ["Shivam","Ritik","Abhay","Shahid"];
// console.log(arr);

// for(let i=0;i<arr.length;i++)
//     {
//         console.log(arr[i]+" ");
//     }

// function divide(a,b)
// {
//     try{
//         return a/b;
//     }catch(error){
//         if(error.message=="Infinity"){
//             return "Division is not possible";
//         }
//         else{
//             return "Unhandable error";
//         }
//     }
// }

// console.log(divide(1,0));


//setTimeOut and setInterval and clearInterval
// setTimeout(function() {
//     for(let i=0;i<5;i++)
//         {
//             console.log("Here I am inside the function");
//         }
// },2000);


// let timer = setInterval(function(){
//     console.log("windows is alerting!!");
// },2000);
// clearInterval(timer);

//slice and splice methods
// let fruits = ["Mango","Apple","Banana","Berry"];

// console.log(fruits.splice(1,2));

// fruits.splice(2,0,"Pineapple","BlueBerry");
// console.log(fruits);

// console.log(fruits.splice(3));
// fruits.splice(0,2,"pineapple","blueberry");

// console.log(fruits);

//Fs module
//synchronously
// const fs = require("fs");
// const fileContent = fs.readFileSync("./file1.txt","utf-8");
// console.log(fileContent);

//asynchronously

//callback function :- a function that is passed to another function as an argument is known as callback function.


//read and write in a file..
// const fs = require("fs");
// const content ="Hello baby!!";
// fs.writeFile("./file1.txt",content,(error,data)=>{
//     if(error)
//         {
//             console.log(error);
//         }
//         else
//         {
//             console.log(data);
//         }
// });

//Buffer
// const buffer = new Buffer.from("Abhishek");
// console.log(buffer);

// console.log(buffer.toJSON());

// console.log(buffer.toString());


//http server

// const http = require("http");
// const path = require("path");
// const server = http.createServer((req,res)=>{
//     console.log("New Request Received!!");
//     res.end(path.join(__dirname,"/file1.txt"));
// })

// server.listen(2000,()=>{
//     console.log("Server is listened on port 2000");
// })


// url
// const url = new URL("https://internet.lpu.in/24online/servlet/E24onlineHTTPClient");
// console.log(url.href);
// console.log(url.hostname);
// console.log(url.pathname);
// console.log(url.host);
// console.log(url.search);
// console.log(url.protocol);

//os

// const os = require("os");
// console.log(os.totalmem()/(1024*1024)+" mb");
// console.log(os.cpus());

// console.log(os.userInfo());
// console.log(os.hostname());
// console.log(os.arch());










