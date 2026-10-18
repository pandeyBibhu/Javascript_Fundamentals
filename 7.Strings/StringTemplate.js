//Using Back ticks(``) to create a string template in JavaScript

let str=`Bibhu Pandey is a software engineer from India.He is 28 years old and he is working in a software company.`;
console.log(str);
//Using Double quotes and single quotes to create a string template in JavaScript
let str2=`Bibhu Pandey from "India" is sfoftware engineer and he is 28 years old.`;
console.log(str2);

let str3=`Bibhu Pandey is a software engineer from 'India'.He is 28 years old and he is working in a software company.`;
console.log(str3);
//mutliline string using back ticks(``) in JavaScript
let str4=`Bibhu Pandey is a software engineer from "India".
He is 28 years old and 
he is working 
in a software company.`;
console.log(str4);

//interpolation in string template using back ticks(``) in JavaScript
let name1="Bibhu Pandey";
let age=28;
let country="India";
let str5=`${name1} is a software engineer from ${country}.He is ${age} years old and he is working in a software company.`;
console.log(str5);

//Expression support in string template using back ticks(``) in JavaScript
let a=10;
let b=20;
let str6=`The sum of ${a} and ${b} is ${a+b}`;
console.log(str6);

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);
