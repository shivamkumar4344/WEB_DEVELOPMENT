const mongoose = require("mongoose");
main().then((res)=>{
    console.log("MongoDb connected");
})
.catch((res)=>{
    console.log(err);
})

async function main()
{
    mongoose.connect("mongodb://localhost:27017/BOOKS");
}

const bookSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String
        },
        price:{
            type:Number,
            min:[100,"Price should be not less than 100"]//error message
        },
        genre:{
            type:[String]
        },
        discount:{
            type:Number,
            default:1
        }

    }
);

const Book = mongoose.model("Book",bookSchema);

// const book1 = new Book({
//     title:"Harry Potter",
//     author:"JK Rowlings",
//     price:2000,
//     genre:["Hollywood","wizards"]
// });

const book2 = new Book({
    title:"Maths 8",
    author:"NCRET",
    price:800,
    genre:["maths","study","trignometry"]
});

// book2.save().then((res)=>console.log(res)).catch((err)=>console.log(err));
// Book.find({}).then((res)=>console.log(res)).catch((err)=>{console.log(err)});
// Book.insertMany(
//     [
//         {title:"The Story of my Life",author:"Helen Keler",price:300,genre:["autobiography","story","non-fiction"]},
//         {title:"RD Sharma",author:"RD sharma",price:1300,genre:["study","Maths"]},
//         {title:"Green Company",author:"Chetan Bhagat",price:800,genre:["comics","story","fiction"]}
//     ]
// ).then((res)=>console.log(res)).catch((err)=>{
//     console.log(err);
// });

// Book.find({}).then((res)=>console.log(res));

// Book.findOneAndUpdate({price:800},{price:900},{new:true}).then((res)=>console.log(res)).catch((err)=>{
//     console.log(err);
// })

// const user7 = new Book({
//     title:"Mongo DB",
//     author:"Shivam Yadav",
//     price:1000,
//     genre:["cse","tech"]
// });

// user7.save().then((res)=>console.log(res));

const user8 = new Book({
    title:"Mongo",
    author:"Kumar Vishwas",
    price:10,
    genre:["cse","tech"]
});

// user8.save().then((res)=>console.log(res)).catch((err)=>{
//     console.log(err.errors.price.properties.message);
// });


