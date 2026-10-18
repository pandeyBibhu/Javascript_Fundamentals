class Employee{

    constructor(name,age,location){
        this.name=name;
        this.age=age;
        this.location=location;
    }
  getEmployeeName(){
    return this.name;
  }
  get employeeLocation(){
    return this.location;
  }
  getEmployeeAge(){return new Date().getFullYear()-this.age;}
  
  calculateSalary(){
    this.salary=1000;
  }

  fullEmployeeDetails(){
    return `Employee Name: ${this.name}, Age: ${this.age}, Location: ${this.location}, Salary: ${this.salary}`;
  }
}

let employeeDetails=new Employee("John",1990,"New York");
employeeDetails.calculateSalary();
console.log(employeeDetails.fullEmployeeDetails());