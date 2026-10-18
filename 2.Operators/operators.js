console.log("Welcome to Operators chapter in Javascript")

//Arithemetic operators

let a=10;
let b=20;
let c=30;

let addition=a+b;
let subtraction=b-a;
let multiplication=a*b*c;
let division=b/a;
let rem=b%a;
let pow=BigInt(a**b);

console.log('Addition::'+addition)
console.log('Subtraction::'+subtraction)
console.log('Multiplication::'+multiplication)
console.log('Division::'+division)
console.log('Reminder::'+rem)
console.log('Power::'+pow)

//Assignment Operators
let x = 50;
x+=5;
console.log(x);
let y = 50;
y-=5;
console.log(y);
let z = 50;
z*=5;
console.log(z);

let p = 50;
p/=5;
console.log(p);

let q = 50;
q%=4;
console.log(q);

///comparision Operators
let m=30;
let n=20;
let l=10;

console.log(m===n);//false
console.log(n===l);//false
console.log(m>n);//true
console.log(n<l);//false
console.log(m>=l);//true
console.log(m<=n);//false
console.log(m!=n);//true

///Logical Operators

let t=10;
let u=20;
let v=10;

console.log(t==v || u==v);//true
console.log(t==v && v>u);//false
console.log(t!=v);//false

//Increment operator
let i=10;
let j=10;
console.log(i++);//10
console.log(i++);//11
console.log(i++ + i++);//25
console.log(i++);//14
console.log(++j);//11
console.log(++j + ++j);//25
console.log(j++);//25
//Decrement operator
let e=5;
let f=5;

console.log(e--);//5
console.log(e--);//4
console.log(e-- - e--);//1

//String operator

let fName='Bibhu';
let lName='Pandey';
console.log(fName+lName);

///ternary operator

let xx=10;
let yy=20;
console.log(xx>=yy?"xx is greater":"yy is greater");
