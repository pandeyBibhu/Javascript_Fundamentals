//creating array
const array=[10,20,30]
console.log(array)

const arr=new Array(3);//here it creates empty array with 3 slots.
console.log(arr.length)
arr[0]=2;
arr[1]=1;
arr[2]=4;
console.log(arr)
arr[3]=5;
console.log(arr)

//array.of();
const arr1=Array.of(2);
console.log(arr1)
//Array.from()
const arr2=Array.from("Bibhu");
console.log(arr2)

//one dimenssional array
const arr1D=["Bibhu","Richa","Sandhya","Akhileshwar","Jayant","Niti"]
console.log(arr1D)

//Multi Dimenssional array:Array containing another array 
const arrmd=[[1,2,3],[4,5,6]]
console.log(arrmd)
console.log(arrmd[1][2])

//PUSH

const emptyArr=[];
emptyArr.push(10);
emptyArr.push(20);
emptyArr.push(30);
emptyArr.push(40);
console.log(emptyArr)
emptyArr.pop()
console.log(emptyArr)

//unshift()

emptyArr.unshift(50);
console.log(emptyArr)

//shift
let firstEle=emptyArr.shift();
console.log(firstEle)

//splice(start,startCount,...insert)

const newArr=[10,20,30,40]
const removed=newArr.splice(1,2,60,70);
console.log(removed);//20,30
console.log(newArr)

//slice(start,end)
const fruits = ["Apple", "Banana", "Mango", "Orange"];

const selected = fruits.slice(1, 4);
console.log(selected)
console.log(fruits)
// Multiplication table of 10 using an array
const tableNumber = 10;
const multipliers = Array.from({ length: 10 }, (_, index) => index + 1);
const multiplicationTable = multipliers.map((multiplier) => tableNumber * multiplier);

multiplicationTable.forEach((product, index) => {
  console.log(`${tableNumber} x ${index + 1} = ${product}`);
});
