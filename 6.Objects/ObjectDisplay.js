//Displaying objects in the scene

console.log("Welcome to objects display in JavaScript");

const car={
    "Brand":"BMW",
    "Model":"X5",   
    "Year":2022,
    "Color":"Black",
    "Price":80000,
    "displayCar":function(){
        return "The car is a "+this.Color+" "+this.Brand+" "+this.Model+" of year "+this.Year+" and costs $"+this.Price;
    }   
}
console.log(car.displayCar());

//usng For...in loop to display objects

for(let key in car){
    console.log(key+": "+car[key]);
}   


//using Object.values()

const employee={
    "id":101,
    "FirstName":"Chandan",
    "LastName":"Pandey",
    "Age":30,
    "Designation":"Software Engineer",
    "Salary":50000,
}
console.log(Object.values(employee));//It will return the values of the object in an array format

//usinf Object.entries()
console.log(Object.entries(employee));//It will return the key value pairs of the object in an array format

//Using Objects.entries() to display objects in a loop
for(let [key,value] of Object.entries(employee)){
    console.log(key+": "+value);
}

//using Json.Stringify() to display objects in a string format
console.log(JSON.stringify(employee));//It will return the object in a string format


