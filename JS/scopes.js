function outer() {
    inner();
    function inner() {
        console.log(b);

    }
}
var b = 10;
outer();
console.log(b);


/* scope = Where can this variable/function be accessed  in the code
OR
is variable/function inside the scope of code/functions*/
//lexical env = local memory + lexical env of parent;
//scope chain: chain of lexical environment and the parent references.