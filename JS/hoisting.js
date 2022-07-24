var x = 10;
function greet() {
    console.log("hello pepcoders");
}
console.log(x);
greet();
hello(); //this is throw an error


console.log(x);
greet();
var x = 10;
//function
function greet() {
    console.log("hello pepcoders");
}
//function expression
var hello = function() {
    console.log("you guys rock");
}

// hoisting definition ->

// we can access the variables even before we have declared its value