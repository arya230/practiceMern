//Three types of functions

// 1-) Normal functions
//function definition or function declaration or function statement
//function function_name(param1, param2) {
    //do something
// }

//function invoke
//function_name(args1, args2) 

function add(a, b) {
    console.log(a + b);
}
add(2,6);

// functions are treated as first class citizens in javascript
//functions can be returned
//functions can be passed as parameters/arguments

function calculator(str, a, b) {
    if(str == "add") {
        return function add(){
            console.log(a + b);
        }

    }
    // else if(str == sub) {

    // }
}

let returnedFunc = calculator('add', 2, 3);
console.log("returned function is\n" + returnedFunc);
returnedFunc();

// //2-) function expression
let sayHi = function() {
    console.log("hello world I am a function expression");
}
sayHi();

function sayBye(c, d) {
    console.log(c+d);
}
let y = sayBye(2, 3);



let variable_name = function() {
    //do something
}
// name of the variable is used to invoke the function
variable_name();

// 3-)IIFE-> Immediately invoke function expression

function add(a, b) {
    return a + b
}

let additionIIFE = (function (a, b) {
    console.log(a + b);

})(20, 30);

// ability to pass functions as values

// const factorial = function fac(n) {
//     return n < 2 ? 1 : n * fac(n - 1);
//   }
  
//   console.log(factorial(3))



// example of ability to pass functions as a arguments
// function teacher(){
//     return "Teacher";
// }
  
// function student(){
//     return "Student";
// }
  
// function greet(user){
//     console.log("Welcome", user());    
// }
  
// // Prints "Welcome Teacher"
// var message = greet(teacher);
  
// // Prints "Welcome Student" 
// var message = greet(student);

  

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x);
// }
// function b() {
//     var x = 100;
//     console.log(x);
// }


function sayHello(param) {
    console.log("Hello", param);
    return 10;    
}
let output = sayHello();
console.log("hello", output);

//functions are called ffirst-class citizens
// functions are treated as a variable
let a = [1,2,3,4,5];
let  b = a;
console.log(b);

// function expression
let fnContainer = function fn() {
    console.log("I am a function expression");
}
fnContainer();

(function fn() { 
    console.log("I am IIFE");
    console.log("I will run on my own");
})();

// arrow function ->syntax, react, this

let fn = num => num * num;
console.log(fn(5));

// first class citizens
//1- assignment -> function expression
//2- functions can be passed as variables
//3- IIFE-> IMMEDIATELY INVOKED FUNCTION EXPRESSION
//4- ARROW FUNCTIONS

function sayHello(param) {
    console.log("hello", param);
    param();
    return string;
}

function smaller() {
    console.log("Hello I am smaller")
}
let rval = sayHello(smaller);
console.log(rval);  