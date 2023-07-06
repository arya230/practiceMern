let arr = [1,2,3,4];
//output [1,4,9.16]


//pass a function to map
arr = arr.map(function (ele) {
    return ele * ele;

})

console.log(arr);