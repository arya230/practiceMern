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

//function expression
let sayHi = function() {
    console.log("hello world I am a function expression");
}
sayHi();

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