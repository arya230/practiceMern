console.log(x);
var x = 10;
let b = 1000;
console.log(b);

// blocks
// -> it is used to compound statements
// {

// }

// if(10>0) {
    //do something
    //2nd state
    // 3rd statement
// }

//block scope -> variables declared in a block are accessible inside that block , those variables are known to be blocked

//variables declared using  let and const are block scoped

// var is function scoped and it is not block scoped
var a = 100 ;
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}
    console.log(a);
    console.log(b);
// let b = 10;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b);
