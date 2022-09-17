// fs-> stands file system module --  it helps too create file , folders ,put data in them, delete data and read them
//appendFileSync appends data into the file, if not present, it creates the file and then appends the data
const fs = require("fs");
console.log(fs);
let res = fs.appendFileSync("f1.txt", "Hello I am f1 file");
fs.appendFileSync("f1.txt", "\nyou guys are smart");

console.log(res);
// let data = fs.readFileSync("f1.txt",);
// console.log(data + "");
let data = fs.readFileSync("f1.txt", "utf-8");
console.log(data);