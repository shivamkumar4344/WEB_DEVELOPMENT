const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
    {
        to:{
            type:String,
            required:true
        },
        from:{
            type:String,
            required:true
        },
        message:{
            type:String,
            maxLength:100
        },
        createdAt:{
            type:Date
        },
    }
);

const Chat = mongoose.model("Chat",chatSchema);
module.exports = Chat;