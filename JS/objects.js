// javascript's objects are always in key value pair

let obj = {};
 console.log(obj);

 let person = {
    //key : value
    name: "Arya",
    age: 25,
    phoneno: 8057436202,
    gender: "Male",
    height: "171cm"

 };
 console.log(`Hey ${person.name}, thanks for signing up!`);
 console.log(person.name);
 console.log(person["gender"]);

 let str = "hello";
 console.log(str.length);//dot notation
 console.log(str["length"]);//square bracket notation
//nesting of objects

 let captainAmerica = {
    firstname: "Steve",
    lastname: "Rogers",
    friends: ["Bucky", "Tony Stark", "Bruce Banner"],
    age: 102,
    isAvenger: true,
    address: {
        state: "Manhatten",
        city: "New York",
        country: "USA"
    },
    sayHi: function () {
        console.log(`Hello my name is ${this.firstname}`);
    }
 };
 console.log(captainAmerica);
 console.log(captainAmerica.friends[0]);
 captainAmerica.sayHi();//method accessing
 //methods-> objects ke andar functions(
//  console.log(str.toUpperCase());
// for loop
//in keyword  is used to get keys from that object


for(let key in captainAmerica) {
    //key
    console.log(`${key} : ${captainAmerica[key]}`);
    //haathi jo variable ha uske andar meri key ki value padi hui ha
    //value
    console.log(captainAmerica[key]);
    //variable ke andar jo binded value ha vo chahiye
    // console.log(captainAmerica["firstname"]);
}

let car = {
    name: "Ferrari",
    model: 2022,
    startEngine: function() {
        console.log(`Starting the engine of the car ${this.name}`);
    }
};

