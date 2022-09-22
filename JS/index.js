// // Starting JS-> Javascript
// // variable declaration
// var a;
// //variable intialization
a=10;
console.log(typeof a);
console.log(a);

// a = "hello";
// console.log(a);

// console.log(typeof a);

// a = true;
// console.log(a);
// console.log(typeof a);

// a = null;
// console.log(a);
// console.log(typeof a);


var num;
num = 10;
console.log(num);
var float;
float = 2.4;
console.log(float);
// '',"",``
//single quotes, double quotes and backtick

var str = 'a';
console.log(typeof str);
str = "how you doin ?"
console.log(str);

//var has some problem

// redeclaration is allowed
var b  = `I expect myself to 
grasp the concepts`;
console.log(b);
var num = 3450;
console.log(`half of ${num} is ${num/2}`);

var r = "hello";
console.log(r);

var r = 100;
console.log(r); 

//let keyword is used
 let l = 100;
 console.log(l);


//   l = "200";
//  console.log(l);
//  SyntaxError: Identifier 'l' has already been declared
// we can reinitialize a variable but we can't redeclare it
l = 300;
console.log(l);

var num = 10;
for(var i=0;i<num;i++) {
        if(num % i==0) {
    console.log("i will get a placement at any cost");
}
}

// const keyword doesn't allow redeclare or reinitialize
// const x = 10;
// console.log(x);

// x = 4;
// console.log(x);
// //TypeError: Assignment to constant variable. 
//second problem with var keyword
//var keyword is function scoped in case of function else it is global scope
//let keyword is block scoped
// let  j = 20;

// for(var i = 0; i < num; i++) {
//     let j = 20;
//     if(i % 2 == 0) {
//         var hello = 1000;
//         console.log(i);
//     }
//     console.log("inner "+j);

// }
// console.log("outer " + j);
// console.log("value of i is " + i);
// console.log(hello);

for(var i = 0; i < num; i++) {
    let j = 20;
    if(i % 2 == 0) {
        var hello = 1000;
        console.log(i);

    }
    console.log("inner" + j);
}
    console.log("outer" + j);
    console.log("value of i is " +i);
    console.log(hello); 

//var keyword is function scoped in case of functions else it is a global scope
//let keyword is block scoped.





