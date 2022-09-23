//Three types of functions

// 1-) Normal functions
//function definition
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

  