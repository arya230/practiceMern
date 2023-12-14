// function outer() {
//     inner();
//     function inner() {
//         console.log(b);

//     }
// }
// var b = 10;
// outer();
// console.log(b);


/* scope = Where can this variable/function be accessed  in the code
OR
is variable/function inside the scope of code/functions*/
//lexical env = local memory + lexical env of parent;
//scope chain: chain of lexical environment and the parent references.
// function a() {
//     console.log(b); 
//     c();
//     function c() {
        
//     }
// }
// var b = 10;
// a();


// function a() {
//     var b = 10;
//     c();
//     function c() {
        
//     }
// }


// a();
// console.log(b); 

// function a() {
//     // console.log(b);
//     c();
//     function c() {
//         console.log(b);
//     }
// }

// var b = 10;
// a();



// var num = 3
// var increment = function() {
// return num+1;
// }
// console.log(increment());
// console.dir(increment);


var Function = function () {
    var name = 'Aastha';
    var OtherFunction = function () {
      console.log('My name is ' + name); // Accessing variable name of parent scope.
    };
    console.log(name);
    OtherFunction(); // call function
  };
  Function();