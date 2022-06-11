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
//1- pop-> this method removes the element from the last of the array
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
    [1, 2, 3],
    [4, 5, 6],
    [7, 8 ,9],
];
console.log(array2d);
console.table(array2d);


console.log(array2d[1][2]);

