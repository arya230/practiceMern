let  cars = ['BMW', 'AUDI','MG', 1, 2, 3, true];
// in js you can store different values of different types
console.log(cars);

// accessing the elements of an array
console.log(cars[0]);
console.log(cars[3]);

// replacing the elements of an array

cars[3] = "Mahindra";
console.log(cars[3]);

// adding elements in an array
cars[7] = "Honda";
console.log(cars);

// methods of an array
//1- pop-> this method removes the last element  of the array
cars.pop();
console.log("after popping the element\n" + cars);

//2- push-> this method pushes a new  Element at the end of the array

cars.push("TATA");
console.log("after pushing an element");
console.log(cars);

// 3- unshift method-> this add element at the starting of the array
cars.unshift("JLR");
cars.unshift("MUSTANG");
console.log(cars);

// 4- shift method->it removes the element from the 0th index of Array
cars.shift();
cars.shift();
console.log(cars);

console.log(cars.length);

// 2d array

let array2d = [
    ["BMW", 2, null,"car"],
    [4, true, 6],
    [7, 8 ,9],
]; //array of arrays  
["a", "b", "c"]  //array of strings
[1, 2, 3]  //array of numbers
console.log(array2d);  //prints 2d array
console.table(array2d); //prints 2d array in the form of a table
// let res = array2d[1];
// console.log("printing of  res array");
// console.log(res);
// console.log("res of 2nd index");
// console.log(res[2]);
// console.log("line 56 prints this " + array2d[1][2]);
// console.log(array2d.length);   //no of rows in a 2d array
// console.log(array2d[0].length); //no of columns in a 2d array
// //2d me value kaise daale
// array2d[1][1] = false;
// console.table(array2d);


// there are two ways to create an array 
// let array = new array();
let arr =[];

let fruits = ["orange", "apple", "mango"];

console.log(fruits[2]);
console.log(fruits.pop());
console.log(fruits);
fruits.push("CR7");
console.log(fruits);  
fruits[fruits.length] = "LEO";  
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Arya");
console.log(fruits);
// an array in js can store values of any type for eg.

let values = ['apple', {name: 'john'}, true, function() {alert('hello')}];
//get the object at index1 and show its name

console.log(values[1].name);

values[3];

let v = ["a", "b", "c", true,];
console.log(v);
console.log(v[v.length - 1]);

// arrays are objects in js and thus are copied by reference


let fruit = ["Banana"];

let arr1 = fruit;

console.log(arr1 === fruit);

arr1.push("pear");

console.log(fruit);
console.log(arr1);



let arya = ["arya","gairola","26","male"];
// arr[9999] = "cristiano ronaldo";
for(let details of arya) {
    console.log(details);
}

for(let details in arya) {
    console.log(details);
}

//tasks
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);
console.log(styles.length);
styles[Math.floor(styles.length / 2)] = "classics";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);


//array practice

let names = ["arya", "cr7", "ronaldo"];
console.log(names[0]);

let arr3 = ['apple', {name : "john"}, true, function() {console.log("hello");}];
console.log(arr3);
console.log(arr3[1].name);
console.log(arr3[3]());

let gar = [1,2,3,4,5];
console.log(gar);