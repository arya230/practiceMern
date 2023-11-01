// var x = 10;
// function greet() {
//     console.log("hello pepcoders");
// }
// console.log(x);
// greet();
// hello(); //this is throw an error


// console.log(x);
// greet();
// var x = 10;
// //function
// function greet() {
//     console.log("hello pepcoders");
// }
//function expression
// var hello = function() {
//     console.log("you guys rock");
// }

// // hoisting definition ->

// // we can access the variables even before we have declared its value

// //hoisting another example

// getName();
// console.log(x);
// console.log(getName);
// var x = 2;
// function getName() {
//     console.log("namaste js");
// }

// console.log("hello");
// hello();
// var hello = function() {
//     console.log("you guys rock");
// }
// hello();

// let foo ="arya"
// function getName(foo) {
//     console.log(foo);
//     console.log(typeof foo);
//     var foo = "bar";
//     console.log(foo);

// }
// getName(foo);

// console.log(foo);
// var foo = 'foo'; 

// console.log(foo);
// foo = "foo";


// function foobar(foo = bar, bar = 'bar') {
//     console.log(foo);
//   }
//   foobar(); // Uncaught ReferenceError: Cannot access 'bar' before initialization
  //error comes  because bar is not initialized before we are accessing it

  //for eg the code below will run

//   function foobar1(bar = 'bar', foo = bar) {
//     console.log(foo);


//   }
//   foobar1();


//   function hoisting
console.log(getName);
console.log(x);
var x = 7;
function getName() {
    console.log("Namaste Javascript");

}


console.log(getName);