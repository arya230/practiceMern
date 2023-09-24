// // javascript's objects are always in key value pair

// // let obj = {};
// //  console.log(obj);

// //  let person = {
// //     //key : value
// //     name: "Arya",
// //     age: 25,
// //     phoneno: 8057436202,
// //     gender: "Male",
// //     height: "171cm"

// //  };
// //  console.log(`Hey ${person.name}, thanks for signing up!`);
// //  console.log(person.name);
// //  console.log(person['name']);
// //  console.log(person["gender"]);

// //  let str = "hello";
// //  console.log(str.length);//dot notation
// //  console.log(str["length"]);//square bracket notation
// //nesting of objects

// //  let captainAmerica = {
// //     firstname: "Steve",
// //     lastname: "Rogers",
// //     friends: ["Bucky", "Tony Stark", "Bruce Banner"],
// //     age: 102,
// //     isAvenger: true,
// //     address: {
// //         state: "Manhatten",
// //         city: "New York",
// //         country: "USA"
// //     },
// //     sayHi: function () {
// //         console.log(`Hello my name is ${this.firstname}`);
// //     }
// //  };
// //  console.log(captainAmerica);
// //  console.log(captainAmerica.friends[0]);
// //  captainAmerica.sayHi();//method accessing
// //  //methods-> objects ke andar functions(
// // //  console.log(str.toUpperCase());
// // // for loop
// // //in keyword  is used to get keys from that object


// // for(let key in captainAmerica) {
// //     //key
// //     console.log(`${key} : ${captainAmerica[key]}`);
// //     //haathi jo variable ha uske andar meri key ki value padi hui ha
// //     //value
// //     console.log(captainAmerica[key]);
// //     //variable ke andar jo binded value ha vo chahiye
// //     // console.log(captainAmerica["firstname"]);
// // }

// // let car = {
// //     name: "Ferrari",
// //     model: 2022,
// //     startEngine: function() {
// //         console.log(`Starting the engine of the car ${this.name}`);
// //     }
// // };

// function getName() {
//    console.log("My name is Arya");
// }

// function func(x) {
//    console.log(typeof (x), arguments.length);


// }
// func();
// func(7);
// func([1,2,3,4,5]);
// func(getName);



// function updateBrand(obj) {
//    // Mutating the object is visible outside the function
//    obj.brand = "Toyota";
//    // Try to reassign the parameter, but this won't affect
//    // the variable's value outside the function
//    obj = null;
//  }
 
//  const car = {
//    brand: "Honda",
//    model: "Accord",
//    year: 1998,
//  };
 
//  console.log(car.brand); // Honda
 
//  // Pass object reference to the function
//  updateBrand(car);
 
//  // updateBrand mutates car
//  console.log(car.brand); // Toyota


//  //objects

//  let object = {
//   name: "Arya",
//   lastName: "Gairola"
//  }



 //objects in js javascript.info revision
//  let obj = {
//   name: "Arya",
//   age: 26,
//   height: "6ft",
//   lastName: "Gairola"

//  };
//  console.log(obj.name);
//  console.log(obj.height);
//  obj.isAdmin  = true;
//  console.log(obj);
//  delete obj.isAdmin;
//  console.log(obj);


//  console.log(obj.lastName);

//  let user = {};
//  user["likes birds"] = true;
//  console.log(user["likes birds"]);
 
// let key = "likes birds";
// user[key] = true;
// console.log(user[key]);

// let user = {
//   name: "John",
//   age: 30
// };

// let key = ("What do you want to know about the user?", "name");

// // access by variable
// console.log(user[key]); 

// let user = {};
// user = {
//     name: "arya",
//     age: 26,
//     dob:2611
// }

// console.log(user);
// user["likes birds"] = true;
// // console.log(user);
// // delete user["likes birds"];

// // let key = "like bird";
// // user[key] = true;
// // console.log(user);


// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   console.log( this.name );
// }

// // use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

// // these calls have different this
// // "this" inside the function is the object "before the dot"
// user.sayHi(); // John  (this == user)
// admin.sayHi(); // Admin  (this == admin)

// admin['f']();


const person = {
  name: 'peter',
  birthYear: 1994,
  calcAge: function() {
    console.log(2018 - this.birthYear);
  }
}
person.calcAge(); 
// 'this' refers to 'person', because 'calcAge' was called with //'person' object reference
const calculateAge = person.calcAge;
calculateAge();
// 'this' refers to the global window object, because no object reference was given