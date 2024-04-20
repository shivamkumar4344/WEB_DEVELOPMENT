const mongoose = require("mongoose");

main().then((res) => { //promise function
    console.log("Connection Successful");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://localhost:27017/Student");
}

const userSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        age:Number,
    }
);

const User = mongoose.model("User",userSchema);
// const Employee = mongoose.model("Employee",userSchema);

const user1 = new User(
    {
        name:"Rajni",
        email:"abc@gmail.com",
        age:23
    }
);

// user1.save();

const user2 = new User( {
    name:"Kant",
    email:"def@gmail.com",
    age:35
});

// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err) => console.log(err));

const user3 = new User(
    {
        name:"Santam",
        age:45,
        email:"santam@gmail.com"
    }
);

// user3.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>console.log(err));

// User.insertMany(
//     [
        
//             {name:"Mohan",age:40,email:"mohan@gmail.com"},
//             {name:"Dhoni",age:43,email:"msd@gmail.com"},
//             {name:"Rahul",age:32,email:"kl@gamil.com"}
//     ]
// ).then((res) => console.log(res))
// .catch((err)=>console.log(err));

// User.find({age:{$lt:25}}).then((res)=>console.log(res));
// User.findOne({age:23}).then((res)=>console.log(res));


// User.find({}).then((res)=> console.log(res));
// User.updateOne({name:"Rajni"},{age:25}).then((res)=>console.log(res));
// const user6 = new User(
//     {
//         name:"Butler",
//         age:24,
//         email:"jos@boss"
//     }
// );
// user6.save().then((res)=>console.log(res));
// User.updateMany({age:{$lt:30}},{age:40}).then((res)=>console.log(res));
// User.find({}).then((res)=>console.log(res));
// User.updateMany({age:{$lt:30}},{age:31}).then((res)=>console.log(res)).catch((err)=>{
//     console.log(err);
// });
User.find({}).then((res)=>{console.log(res)}).catch((err)=>console.log(err));
