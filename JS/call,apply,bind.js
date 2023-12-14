//call apply bind is used to alter this
// and are examples of explicit binding


let user = {
    firstName: "Arya",
    lastName: "Gairola",
    // welcome: function() {
    //     console.log(`Welcome ${this.firstName} ${this.lastName}`);
    // }
}
// user.welcome();

let welcome = function(email, mobileNumber, location) {
    console.log(`welcome ${this.firstName} ${this.lastName}, thankyou for signing up! your email id is ${email} you registered number is ${mobileNumber}.
    your location is ${location}
    `);  
};



let user2 = {
    firstName: "Ravi",
    lastName: "Shastri"
};


//function borrowing

//call method
// syntax -> function_name.call(obj_to_which_this_to_point, arguments of the function)
// we want to print welcome message for ravi shastri
// user.welcome.call(user2`);
welcome.call(user2, "aryangairola@gmail.com", 8057436202, "India");

// apply method => 

welcome.apply(user, ["aryangairola@gmail.com", 8057436202, "India"]);
//bind method
let bindedFN = welcome.bind(user, "aryangairola@gmail.com", 8057436202, "India");
console.log(bindedFN);
bindedFN();  

//bind happens only once therefore below code will output arya gairola

let againBindedFN = bindedFN.bind(user2);
againBindedFN();
//bindedFN ke  andar welcome function ki copy banti ha and call vaale function hato haat call ho jata ha and call me copy nhi banti 

//call apply and bind is used to point this to some object