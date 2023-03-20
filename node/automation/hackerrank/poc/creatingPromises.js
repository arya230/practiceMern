//constructing our own promise

let myPromise = new Promise(function(resolve, reject) {
    let num1 = 1;
    let num2 = 3;
    let string = "value is equal to 2";
    if(num1 + num2 == 2) {
        resolve(string);

    }
    else {
        reject("no, values are not equal");
    }


})
myPromise.then(function (string) {
    console.log(".then function is", string);

})
.catch(function (err){
    console.log(err);
}); 
