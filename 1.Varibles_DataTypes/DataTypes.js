//dataTypes
console.log("Welcome \nto \nDataTypes \ntopics of \nJavaScript")
//Primitive data type:

//String
let name="Bibhu";
console.log(name,typeof(name));

//Number
let num=44.5;
console.log(num,typeof(num));

//boolean
let isLoggedIn=true;
let isChecked=false;
console.log(isLoggedIn,typeof(isLoggedIn))
console.log(isChecked,typeof(isChecked))

//undefined

let x;
console.log(x,typeof(x));

//null

let values=null
console.log(values,typeof(values))

//bigInt

let bigNumber=12345678909872323123n;
console.log(BigInt(bigNumber),typeof(bigNumber))

//symbol

let numId=Symbol('10')
console.log(numId);

let id1=Symbol();
let id2=Symbol();
console.log(id1===id2);

let id3=Symbol('userId')
let id4=Symbol('userId')
console.log(id3===id4)


//non primitive Data types

//Objects

let student={"name":'Bibu',
    "name2":'Richa',
    "name3":""};

    console.log(student.name,typeof(student.name));
    console.log(student.name2,typeof(student));
    console.log(student.name3,typeof(student));

///arrays:

let days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
console.log(days[1],typeof(days));
console.log(days.length)