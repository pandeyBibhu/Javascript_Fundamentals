//Objects Methods

console.log("Welcome to objects methods in JavaScript");

//this 

const person={
    "FirstName":"Bibhu",
    "LastName":"Kumar",
    "Age":22,
    "id":888,
    "getId":function(){
        return this.id;
    },
    "fullName":function(){
        return this.FirstName+" "+this.LastName;
    }
}

console.log(person.getId());
//Adding methods to objects

const employee=person.FirstName+" "+person.LastName+" is "+person.Age+" years old and his id is "+person.getId();
console.log(employee);
//Adding JavaScript methods to objects
person.fullName= function(){
    return (this.FirstName+" "+this.LastName).toUpperCase();
}
console.log(person.fullName());
