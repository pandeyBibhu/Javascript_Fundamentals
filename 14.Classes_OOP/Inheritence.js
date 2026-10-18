class Car{
    constructor(brand){
        this.brand=brand;
    }
    display(){
        return `Brand:${this.brand}`
    }

}
class model extends Car{
    constructor(brand,model){
        super(brand);
        this.model=model;

    }

    Show(){
        return this.display()+` and Model:${this.model}`;
    }
}

let carDetails=new model("Tata","Nexon");
console.log(carDetails);

console.log(carDetails.display())

console.log(carDetails.Show())
