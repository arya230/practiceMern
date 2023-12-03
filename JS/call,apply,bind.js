let user = {
    firstName: "Arya",
    lastName: "Gairola",
    welcome: function() {
        console.log(`Welcome ${this.firstName} ${this.lastName}`);
    }
}
user.welcome();

let user2 = {
    firstName: "Ravi",
    lastName: "Shastri"
};


//function borrowing


// syntax -> function_name.call(obj_to_which_this_to_point)
// we want to print welcome message for ravi shastri
user.welcome.call(user2);