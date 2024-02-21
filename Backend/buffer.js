const buffer = new Buffer.from("Shivam");//buffer is inbulit function
console.log(buffer);

//to JSON type conversion
console.log(buffer.toJSON());
//to string type conversion
console.log(buffer.toString());

buffer.write("Code");
console.log(buffer.toString());//overwrites the characters