var arr = [];

console.log(arr.__proto__);
console.log(Array.prototype);


console.log(arr.__proto__.__proto__);
console.log(Object.__proto__);

function abc() {
    console.log("you only live once");
}
console.log(abc.__proto__);
console.log(abc.__proto__.__proto__);

console.log(obj.__proto__.__proto__); //null will be the output