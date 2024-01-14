var ans =  1 + "5";
console.log(ans);

console.log("5" - 1);
console.log(null * 5);
console.log(null * "5");
console.log(undefined * 5);



//examples of type conversion

console.log("" +  1 + 0);//10

console.log("" - 1 + 0);//-1

console.log(true + false); //1

console.log(6 / "3");//2

console.log("2" * "3");//6

console.log(4 + 5 + "px");//9px

console.log("$" + 4 + 5);//$45

console.log("4" - 2);//2

console.log("4px" - 2);//nan

console.log(" -9 " + 5); // -9 5

console.log(" -9 " - 5);//-14

console.log(null + 1); //1

console.log(undefined + 1);//nan

console.log(" \t \n" - 2);//1


console.log(5/2);

console.log("FirstLine\n\tSecondLine\nThirdLine");  


const sum = 35 + "hello";
console.log(sum);
console.log(typeof sum);


const string = "";
const number = 40;
const boolean = true;

console.log(!string);
console.log(boolean + string);
console.log(40 + true);