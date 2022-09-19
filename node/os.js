const { Console } = require("console");
const os = require("os"); 
const { cpuUsage } = require("process");
//returns the underlying architecture
let mySystemArch = os.arch();
console.log(mySystemArch);
//returns the information on the cpus
let  myCpuInfo = os.cpus();
console.log(myCpuInfo);
//returns the hostname of the operating system as a string
let hostName = os.hostname();
console.log(hostName);
//Returns an object containing network interfaces that have been assigned a network address.
let networkInfo = os.networkInterfaces();
console.log(networkInfo);
//Returns the operating system as a string.
console.log(os.release());
// Returns a string identifying the operating system platform for which the Node.js binary was compiled. The value is set at compile time.
console.log(os.platform());
console.log(os.type());
// Returns the operating system as a string.
console.log(os.totalmem());
// Returns the system uptime in number of seconds
// console.log(os.uptime());
let uptimeInHours = os.uptime() / 3600;
console.log(uptimeInHours);  
// Returns information about the currently effective user.
console.log(os.userInfo());
// Returns the operating system's default directory for temporary files as a string.
console.log(os.tmpdir());