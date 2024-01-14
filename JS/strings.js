

// var str = "Hello Pepcoders";

// console.log(str);
// console.log(str[4]);

// console.log(str.length);

// //string methods

// // 1- Extraction method

// //slice method
// // Slice(start, end + 1)  //-> start index is inclusive and end index is exclusive

// let slicedStr = str.slice(2, 7);  // 2nd index se start hokar 6th index tak string kategi
// console.log(slicedStr);
// console.log(str);// original source of information is not changed

// //substring method

// //substr(start, length); start index se shuru hoga aur aage ke kitne characters capture karne ha

// let ans = str.substr(2, 6);
// console.log(ans);
// console.log(str);

// str = "YOLO";
// console.log(str);

// console.log(str.toLowerCase());//yolo
// str = "fomo";
// console.log(str.toUpperCase());//FOMO
// console.log(str); // information is intact and has not been tampered with


// // concatenation method-> means to combine two strings as one and make them as one string
// let firstStr = "Self belief and ";
// let secondStr = "hardwork will bring me success";
// let concatenatedStr = firstStr + secondStr;
// console.log(concatenatedStr);
// //concat method
// let concatStr = firstStr.concat(secondStr, "as well as happiness");
// console.log(concatStr);

// //trim method-> removes all the whitespaces in the starting and in the  trailing.

// let = trimStr ="               hello           pepcoders";
// console.log(trimStr.length);
// console.log(trimStr.trim().length);

// var str = "Hello My Name is Arya";
// console.log(str);
// var a = str.split(" ");//divides the string on the basis of argument and puts them in an array
// console.log(a);



// console.log('35' + '25');

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   console.log("Yay, I love chocolate ice cream!");
// } else {
//   console.log("Awwww, but chocolate is my favorite…");
// }


// let name = "Arya";

// console.log(`My name is arya${1}`);
// console.log(`My name is Arya${"hello"}`);
// console.log(`My name is ${name}`);

// let name1 = prompt("What  is your name" , Arya);
// console.log(name1);

// function add(a, b) {
//   let sum = a + b;
//   return sum;
// }

// console.log(`1 + 2 = ${add(1,2)}.`);

//string are immutable in javascript

// we can 

// let str =  "hello";
// str = "h" + str[0];
// console.log(str);

//str.indexOf()=> finds the position of the substring

//uppercase the first letter


//Q1- String practice questions


function ucFirst(str) {
  let newStr = str.slice(1);
  newStr = "J" + newStr;
  console.log(newStr);


}

ucFirst("john");



// Q2- String practice questions


function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || str.includes('xxx');



}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));


// Q3- string practice questions


function truncate(str, maxLength) {
  if(str.length > maxLength) {
    return str.slice(0, maxLength - 1) + "...";
    


  }


}


console.log(truncate("What I'd like to tell on this topic is:", 20));

// Q4-  String practice questions




