class Employee{

    constructor(name,age){
        this._age=age;
        this._name=name;
    }
 
    get name(){
        return this._name;
    }
    set age(Age){
        this._age=Age;
    }
    get age(){
        return this._age;
    }

}

const employee=new Employee("Bibhu",37);

console.log(employee.name);
employee.age=40;
console.log(employee.age)