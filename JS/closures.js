// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     }
//     inner();

// }
// outer();

// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     }
//     return inner;

// }
// var z = outer();
// console.log(z + "");
// z();

// function outer() {
//     var a = 7;
//     function inner() {
//         console.log(a);
//     }
//     a = 10;
//     console.log(a);
//     return inner;
// }
//  var c = outer();
//  console.log(c);
//  c();
 

// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();

  function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  console.log(myFunc);
//   myFunc();