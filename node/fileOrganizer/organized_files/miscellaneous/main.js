//entry point of my command line
let helpFunc = require("./commands/help");
let orgFunc = require("./commands/organize");
let treeFunc = require("./commands/tree" );
// console.log(helpFunc.ghoda());
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
switch (command) {
    case "tree":
        //call tree function
        // console.log("tree function called and  successfully executed" +  path);
        treeFunc.tree(path);
        break;
    case "organize":
        //case organize function
        orgFunc.organize(path);
        // console.log("tree function called and  successfully executed" +  path);
        break;
        
    case "help":
        //call help function
        helpFunc.help();
        // console.log("tree function called and  successfully executed");
        break;
    default:
        console.log("command not recognized :/");
        break;
}