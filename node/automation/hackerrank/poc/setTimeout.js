
//     function yolo() {
//     var a = 10;
//     function cb(err, res) {
//         if(err) {
//             console.log(err);
//         }
//         else {
//             console.log("hello how are you!!!");
//         }
//     }
//     //function to be executed(callback func), time(ms) after which cb to be executed
//     //1 second = 1000 millisecond
//     setTimeout(cb, 5000);
//     console.log(a);
// }
 
// yolo();




// let request = require("request");
// let url = "https://www.worldometers.info/coronavirus/";
// function yolo () {
//     var a = 10;
//         if(err) {
//             console.log(err);
//         }
//         else {
//             console.log("hello how are you!!!");
//             console.log("status code is", res.statuscode);
//         }
    
// }
// //function to be executed(callback func) , time(ms) after which cb to be executed
// //1second = 1000 milli second
// request(url, cb);
// console.log(a);

// for(let i = 1; i <= 10; i++) {  
//     //hints :closures and  scope -> wrapping
//     setTimeout(function () {
//         console.log(i);
//     }, 2000*i);
    
// }   

// setTimeout(function() {
//     for(var i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// },2000*i);


// for(var i = 1; i <= 10; i++) {
//     let a = i;
//     setTimeout(function () {
//         console.log(a);
//     },2000 * i);    
// }



// solution

//check this callback example

// function greeting(name) {
//     alert(`Hello, ${name}`);
//   }
  
//   function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
//   }
  
//   processUserInput(greeting);


// function a() {
//     let x = 100;
//     function y() {
//         return x;
//     }

// }
//     let fn = a();
//     let ans = fn();
//     console.log(ans);

//     let b = 1000;

    


//fetch api

console.log("before");  
setTimeout(function () {
    console.log("time over");    
},5000);

fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(function(response) {
       return response.json();   // when a promise is returned, it creates a promise and then returns it, which is obviously of fulfilled state
      })
      .then(function (json){
        console.log(json);
        

      });


console.log("after");




