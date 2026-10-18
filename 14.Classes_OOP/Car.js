class Car{
    constructor(name,model,year){
        this.name=name;
        this.model=model;
        this.year=year;
    }

    getDetails(){

        return `CarName:${this.name} carModel:${this.model} carYear:${this.year}`
    }
}

let cardetails=new Car("Tata","Nexon",2020);
console.log(cardetails.getDetails());
