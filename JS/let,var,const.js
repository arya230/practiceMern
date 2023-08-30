// 
// blocks
// -> it is used to compound statements
{

}

// if(10>0) {
//     do something
//     2nd state
//     3rd statement
// }

//block scope -> variables declared in a block are accessible inside that block , those variables are known to be blocked

// variables declared using  let and const are block scoped

// var is function scoped and it is not block scoped
// var a = 100 ;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//     console.log(a);
//     console.log(b);
// // let b = 10;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b);



// var is function-scoped or global scoped and let is block scoped

// for(var i = 0; i < 5; i++) {
//     console.log("inside the loop ", i);
// }
// console.log("outside the loop", i);

// let xy = 100;
// let xy = 50;

// // var , let and const are differentiated on the basis of three things
// 1- redecalaration & reassignment
// 2-  scope of varible
// // 3- hositing

// var 
// variables declared with var can have function scope(local scope) or global scope
// variable declared with var  can be reassigned and redeclared


//interview question

var a  = 10;
console.log("line number 2", a);
function fn() {
    console.log("line number 4", a);
    var a = 20;
    a++;
    console.log("line number 7", a);
    if(a) {
        var a = 30;
        a++;
        console.log("line number", a);
    }
    console.log("line number 13", a);
}
fn();
console.log("line number", a);



var number = 50

function print() {
  var square = number * number
  console.log(square)
}

console.log(number) // 50

print()


//const 
// const arr = [1, 2, 3, 4 , 5];


