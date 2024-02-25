//Os module will return all the information about operating system of your computer.
const os = require("node:os");
console.log("Architecture: "+os.arch());
console.log("User Info: "+os.userInfo());
console.log("HomeDir: "+os.homedir());
console.log("About network: "+os.networkInterfaces());