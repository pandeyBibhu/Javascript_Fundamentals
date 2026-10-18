class MyClass{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    getAge(){
        const calculateAge=new Date().getFullYear()-this.age;
        return calculateAge;
    }
}

let age=new MyClass("John",1990);
console.log(age.getAge());