//1st method by making function we can make it.
// function add(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// module.exports = {
//     add,sub
// };

//2nd method by using exports in built modules
exports.add = (a,b) => a+b;

exports.sub = (a,b) => a-b;