//read two files f1.txt and f2.txt and f3.txt serially by using callbacks

const fs = require("fs");

// //This is what callback hell is
// readFile is async function 
fs.readFile("f1.txt", function cb1(err, res){
    //err will be when f1.txt does not exist at that location
    if(err) {
        console.log(err);
    }else {
        //res +"" is written because data comes in buffer so to convert buffer into string it is used 
        console.log(res + "");
        //now read f2 file
        fs.readFile("f2.txt", function cb2(err, res) {
            if(err) {
                console.log(err);
            }
            else {
                console.log(res + "");
                fs.readFile("f3.txt", function cb3(err, res) {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        console.log(res + "");
                        console.log("read all files");
                    }
                })
            }
        });
    }

});




// // 1st way to overcome callback hell is to separate the callback functions

// fs.readFile("f1.txt", cb1);

// function cb1(err, res) {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(res + "");
//         fs.readFile("f2.txt", cb2);
//     }
// }


// function cb2(err, res) {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(res + "");
//         fs.readFile("f3.txt", cb3);
//     }
// }

// function cb3(err, res) {
//     if(err) {
//         console.log(err);

//     }
//     else {
//         console.log(res + "");
//         fs.readFile("f2.txt", cb2);
//         console.log("data printed");
//     }
// }


// q2 read 3 files f1.txt , f2.txt, f3.txt parallely=> in this any file that will be read first will be come first followed by others



fs.readFile("f1.txt", cb);
fs.readFile("f2.txt", cb);
fs.readFile("f3.txt", cb);

function cb(err, res) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(res + "");
    }
}
