const mongoose = require("mongoose");
const  express = require("express");
const app = express();
const path = require("path");
const Chat = require("./models/chats.js");

main().then((res) => {
    console.log("MongoDB connected");    
}).catch((err) => {
    console.log(err);
});

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

async function main()
{
    await mongoose.connect("mongodb://localhost:27017/whatsapp");
}
app.get("/",(req,res)=>{
    res.send("root is working");
});


app.get("/chats",async (req,res)=>{
    let chats = await (Chat.find());
    console.log(chats);
    res.render("index.ejs",{chats});
})

app.listen(8000,()=>{
    console.log("Server is litening at port 8000");
})