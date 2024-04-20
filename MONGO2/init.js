const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

main().then((res) => {
    console.log("MongoDB connected");
}).catch((err) => {
    console.log(err);
});

async function main()
{
    mongoose.connect("mongodb://localhost:27017/whatsapp");
}

let chatAll = [

        {
            to:"Ravi",
            from:"Kishan",
            message:"How are you?",
            createdAt:new Date()
        },
        {
            to:"Mohit",
            from:"kumar",
            message:"send java notes",
            createdAt:new Date()
        },

        {
            to:"Rohit",
            from:"Abhishek",
            message:"good to see you back",
            createdAt:new Date()
        },
        {
            to:"Ashwin",
            from:"Pandya",
            message:"let's play cricket tommorow?",
            createdAt:new Date()
        },
        
]

// Chat.insertMany(chatAll).then((res)=>{
//     console.log(res);
// }).catch((err)=>console.log(err));

