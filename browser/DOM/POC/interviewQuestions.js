// 1st question

// let arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];
// let obj = {};
// for(let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = obj[arr[i]] == undefined ? 1 : obj[arr[i]] + 1;

      
// }
// console.log(obj);


// // 2nd question

// let obj1 = {
//     name : "Arya",
//     age : 26,
//     email : "talktoarya@gmail.com",
//     phone : undefined
// };

// console.log(obj1.email);
// console.log(obj1.ac);
// console.log(obj1.phone);
// console.log("phone" in obj1);

// for(key in obj1) {
//     console.log(key);
//     console.log(obj1[key]);
// }

// let user = {
//     name: "Arya",
//     sayHi() {
//         console.log(this.name);
//     }
// }
// let admin = user;
// user.sayHi();
// user = null;
// admin.sayHi();


//1ST RULE => The value of this is evaluated during the run-time, depending on the context.

//2ND RULE => 

// this interview type questions
//1st type
//default binding
// function type1() {
//     console.log(this.name);
//   }
  
//   var name = "JS";
  
//   type1();  //globally , this -> window ,   


  //2nd type
function type2() {
    console.log(this.lname);
} 
var lname = "Kumar";

var obj = {
    lname:"Verma", 
    type2
};
// Obj.type2();//in EXECUTION context of function, 'this' gives will reference to the object
console.log(obj);
type2();
// //3rd type

// var food = "Pizza";
// var obj = {
//     food: "Pasta",
//     eat() {
//         console.log("i am eating " + this.food);
//     }
// }

// var foo = obj.eat;
// foo();      


//4th question

var length = 1;
function square() {
  let cb = function () {
    console.log(this.length * this.length);
  }
  setTimeout(cb, 2000);
}
var obj = {
  length: 3,
  square
};

obj.square();




