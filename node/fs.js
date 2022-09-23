// fs-> stands for file system module --  it helps to create file , folders ,put data in them, delete data and read them
//appendFileSync appends data into the file, if not present, it creates the file and then appends the data
const fs = require("fs");//require method, goes to the file that is needed to be required , execute that file and if there is something returned/exported we get that in variable 'abc'
// const { add } = require("../JS/temp");
// console.log(fs);
const abc = require("../JS/temp")
console.log(abc);
let ans = abc.add(2, 4);
console.log(ans);
fs.appendFileSync("f1.txt", "Hello I am f1 file");
fs.appendFileSync("f1.txt", "\nyou guys are smart");

// console.log(res);
// let data = fs.readFileSync("f1.txt",);
// console.log(data + "");
// let data = fs.readFileSync("os.js", "utf-8");
// console.log(data);