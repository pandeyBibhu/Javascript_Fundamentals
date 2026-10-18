//functions are reusable block of code
//which is used to perform certain task.
//when they got invoked.It can return the value and it can be called by another functions
//It can accepts the parameter
//Normal function is implemented by using function keyword

function printName(){
    console.log("My Name is Bibhu Pandey")
}
printName();

function returnName(){
    return "My Name Is Bibhu Pandey"
}
returnName();

function add(a,b){
    return a+b;
}
let add=add(10,5)
let add2=add(20,20)
console.log(add)
console.log(add2)

//local varible

function multiplication(a,b){
    let mul=a*b;
    return mul;
}

console.log(mul(20,10));
let multi=multiplication(2,5)*5;
console.log(multi)

function checkAge(age){
    if(age>18){
        return "Access granted"
    }else{
        return "Too yung"
    }
}
checkAge(30)

//function expression
let getName=function(){
                  return "Bibhu Pandey"
}
console.log(getName)