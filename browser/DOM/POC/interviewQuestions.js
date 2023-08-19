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

let user = {
    name: "Arya",
    sayHi() {
        console.log(this.name);
    }
}
let admin = user;
user.sayHi();
user = null;
admin.sayHi();