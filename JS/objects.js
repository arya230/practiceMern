// const prompt = require("prompt-sync")();
// // // javascript's objects are always in key value pair

// // // let obj = {};
// // //  console.log(obj);

// // //  let person = {
// // //     //key : value
// // //     name: "Arya",
// // //     age: 25,
// // //     phoneno: 8057436202,
// // //     gender: "Male",
// // //     height: "171cm"

// // //  };
// // //  console.log(`Hey ${person.name}, thanks for signing up!`);
// // //  console.log(person.name);
// // //  console.log(person['name']);
// // //  console.log(person["gender"]);

// // //  let str = "hello";
// // //  console.log(str.length);//dot notation
// // //  console.log(str["length"]);//square bracket notation
// // //nesting of objects

// // //  let captainAmerica = {
// // //     firstname: "Steve",
// // //     lastname: "Rogers",
// // //     friends: ["Bucky", "Tony Stark", "Bruce Banner"],
// // //     age: 102,
// // //     isAvenger: true,
// // //     address: {
// // //         state: "Manhatten",
// // //         city: "New York",
// // //         country: "USA"
// // //     },
// // //     sayHi: function () {
// // //         console.log(`Hello my name is ${this.firstname}`);
// // //     }
// // //  };
// // //  console.log(captainAmerica);
// // //  console.log(captainAmerica.friends[0]);
// // //  captainAmerica.sayHi();//method accessing
// // //  //methods-> objects ke andar functions(
// // // //  console.log(str.toUpperCase());
// // // // for loop
// // // //in keyword  is used to get keys from that object


// // // for(let key in captainAmerica) {
// // //     //key
// // //     console.log(`${key} : ${captainAmerica[key]}`);
// // //     //haathi jo variable ha uske andar meri key ki value padi hui ha
// // //     //value
// // //     console.log(captainAmerica[key]);
// // //     //variable ke andar jo binded value ha vo chahiye
// // //     // console.log(captainAmerica["firstname"]);
// // // }

// // // let car = {
// // //     name: "Ferrari",
// // //     model: 2022,
// // //     startEngine: function() {
// // //         console.log(`Starting the engine of the car ${this.name}`);
// // //     }
// // // };

// // function getName() {
// //    console.log("My name is Arya");
// // }

// // function func(x) {
// //    console.log(typeof (x), arguments.length);


// // }
// // func();
// // func(7);
// // func([1,2,3,4,5]);
// // func(getName);



// // function updateBrand(obj) {
// //    // Mutating the object is visible outside the function
// //    obj.brand = "Toyota";
// //    // Try to reassign the parameter, but this won't affect
// //    // the variable's value outside the function
// //    obj = null;
// //  }
 
// //  const car = {
// //    brand: "Honda",
// //    model: "Accord",
// //    year: 1998,
// //  };
 
// //  console.log(car.brand); // Honda
 
// //  // Pass object reference to the function
// //  updateBrand(car);
 
// //  // updateBrand mutates car
// //  console.log(car.brand); // Toyota


// //  //objects

// //  let object = {
// //   name: "Arya",
// //   lastName: "Gairola"
// //  }



//  //objects in js javascript.info revision
// //  let obj = {
// //   name: "Arya",
// //   age: 26,
// //   height: "6ft",
// //   lastName: "Gairola"

// //  };
// //  console.log(obj.name);
// //  console.log(obj.height);
// //  obj.isAdmin  = true;
// //  console.log(obj);
// //  delete obj.isAdmin;
// //  console.log(obj);


// //  console.log(obj.lastName);

// //  let user = {};
// //  user["likes birds"] = true;
// //  console.log(user["likes birds"]);
 
// // let key = "likes birds";
// // user[key] = true;
// // console.log(user[key]);

// // let user = {
// //   name: "John",
// //   age: 30
// // };

// // let key = ("What do you want to know about the user?", "name");

// // // access by variable
// // console.log(user[key]); 

// // let user = {};
// // user = {
// //     name: "arya",
// //     age: 26,
// //     dob:2611
// // }

// // console.log(user);
// // user["likes birds"] = true;
// // // console.log(user);
// // // delete user["likes birds"];

// // // let key = "like bird";
// // // user[key] = true;
// // // console.log(user);


// // let user = { name: "John" };
// // let admin = { name: "Admin" };

// // function sayHi() {
// //   console.log( this.name );
// // }

// // // use the same function in two objects
// // user.f = sayHi;
// // admin.f = sayHi;

// // // these calls have different this
// // // "this" inside the function is the object "before the dot"
// // user.sayHi(); // John  (this == user)
// // admin.sayHi(); // Admin  (this == admin)

// // admin['f']();


// // const person = {
// //   name: 'peter',
// //   birthYear: 1994,
// //   calcAge: function() {
// //     console.log(2018 - this.birthYear);
// //   }
// // }
// // person.calcAge(); 
// // // 'this' refers to 'person', because 'calcAge' was called with //'person' object reference
// // const calculateAge = person.calcAge;
// // calculateAge();
// // 'this' refers to the global window object, because no object reference was given


// let user = {
//   name: "arya",
//   age:26
// }

// console.log(user.name);
// console.log(user.age);
// console.log(user);
// user["likes birds"] = true;
// console.log(user);
// console.log(user["likes birds"]);

// let user1 = {
//   name: "sonu",
//   age: 26,
//   rollno: 282
// }

// let fruit = prompt("Which fruit to buy", "apple");
// let color = prompt("what is your color", "black");
// let bag = {
//   [fruit]: 5,
// };

// console.log(bag.fruit);
// bag[color] = 1;
// console.log(bag.color);



// // interview Questions

// before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);
// console.log(menu)
// // console.log(menu)

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// function multiplyNumeric(menu) {
//   for(let key in menu) {
//     if(typeof menu[key] == "number") {
//       menu[key] *= 2;
//     }
//   }
// }


// cloning and merging, object.assign

// Object.assign(dest, ...source);
//dest is a target object
//source is the source objects


// let man = {
//   age: 30
// };

// let permission1 = {
//   canEdit: true
// };
// let permission2 = {
//   canView: true
// };

// Object.assign(man, permission1, permission2);
// console.log(man.canEdit);
// console.log(man.canView);

// let arya = {
//   name : "sonu",
//   age: 26,
//   height: 5
// }

// let clone = Object.assign({}, arya);

// console.log(clone.name);

// let obj2 = {
//   name: "kunal",
//   age: 22,
//   sizes: {
//     height: 5,
//     width: 50
//   }
// };
// let clone1 = structuredClone(obj2);
// obj2.sizes.height = 6;
// console.log(obj2.sizes.height);
// console.log(clone1.sizes.height);



// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone5 = structuredClone(user);

// console.log( user.sizes === clone5.sizes ); // false, different objects

// // user and clone are totally unrelated now
// user.sizes.width = 60;    // change a property from one place
// console.log (clone5.sizes.width);


// //object method (this)



// let person = {
//   name: "ajay",
//   age: 25,
  
// }



// let user = {
//   name: "Arya",
//   rollno: 26,
//   "likes books": true
// }
// // console.log(user["likes books"]);


// let key = "arya gairola";
// user[key] = true;
// console.log(user["arya gairola"]);



let obj = {};
obj.__proto__ = 5;
console.log(obj.__proto__);

let user = {
  name: "arya",
  age: 30,
  isTrue: undefined
};

// console.log("name" in user);
// console.log("age" in user);
// console.log("isTrue" in user);

for(key in user) {
  console.log(key + " and its value is " + user[key]);
  
}


//objects can be created using two methods

