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
 


  // function makeFunc() {
  //   const name = "Mozilla";
  //   function displayName() {
  //     console.log(name);
  //   }
  //   return displayName;
  // }
  
  // const myFunc = makeFunc();  
  // console.log(myFunc);
  // myFunc();



// function x() {
//   var a = 8;
//   return function y() {
//     console.log(a);
//   }
  
// }
// let ans = x();
// console.log(ans);
// ans();


// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);

//   } 
//   y();
// }
// x();



// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();


// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

// function makeSizer(size) {
//   return function () {
//     document.body.style.fontSize = `${size}px`;
//   };
// }

// const size12 = makeSizer(12);
// const size14 = makeSizer(14);
// const size16 = makeSizer(16);


// function x() {
//   for(let i = 1; i<=5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     },i * 3000);
//   }
//   console.log("Namaste Javascript");
// }
// x();



// function x(){
//   for(var i = 1; i <= 5; i++) {
//     function y(x) {
//     setTimeout(function () {
//       console.log(x);
    
//     },x * 3000);
//     }
//     y(i);
//   }
//   console.log("Namaste Javascript");
  
// }
// x();


function outest() {
  var c = 20;
  function outer(b) {

    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  } 
  return outer;
}

var close = outest()("helloworld");

console.log(close());