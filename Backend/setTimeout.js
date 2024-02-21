const prompt = require("prompt-sync");
let a = setTimeout(function() {
    console.log("My name is Shivam Kumar");
},5000);

let b = "y";
if(b=="n")
{
    clearTimeout(a);
}
else{
    console.log("You are good to go!");
}




