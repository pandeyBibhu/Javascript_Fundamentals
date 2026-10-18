// import employeeDetails, {name,age,location} from "./FirstModules.js"
import firstmodule from "./FirstModules.js"
console.log("==================This is second module file=============")

// console.log("Name::"+name);
// console.log("Age::"+age);
// console.log("Loaction::"+location);

console.log("Name::"+firstmodule.name);
console.log("Age::"+firstmodule.age);
console.log("Loaction::"+firstmodule.location);


console.log("Employee details::"+firstmodule.employeeDetails())


