//unary binary and operand


//operand
//remainder opeartor
console.log(5 % 2);
//division operator
console.log(5 / 2);

// exponentiation operator
console.log(2 ** 2);

//exponentiation for  sqaure root
console.log(144 ** (1/2)); 

//when the binary + is applied with strings then it becomes concatenation operator
let s = "my" + "birthday";
console.log(s);

//if any of the operand is a string then the other operand is also converted to a string too
console.log("1" + 2);
console.log("arya will be best " + 1);

//more examples
console.log(2 + 2 + "2");

// here it will change
console.log("2" + 2 + 2);

//other operators apart from  binary + operators always convert their opreands to numbers

console.log(5 - "2");
console.log("6" / "2");

// unary plus exists in two forms: binary form and unary form
//The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

let x = "1";
console.log(+x + 2);

//it also converts non-numbers
console.log(+true);
console.log(+"");


//another example
let apples = "2";
let oranges = "3";

console.log( apples + oranges ); //23


// if we want to treat them as numbers, we need to convert and then sum

let apples1 = "2";
let oranges2 = "3";

// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); 

//assignment operator 

let x1 = 2 * 2 + 1;
console.log(x1);



// BITWISE OPERATORS

// Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

// These operators are not JavaScript-specific. They are supported in most programming languages.

// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )



// COMMA OPERATOR
// The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

// The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

let a = (1 + 2, 3 + 4);
console.log(a);

// one more example for comma operator

for(a = 1, b = 2, c = a*b; a<10; a++) {

}
console.log(c);

