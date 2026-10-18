
function forLoop(num){
    console.log("For loop")

    for(let i=1;i<=num;i++){
        console.log(i+"\n")
    }
}
function whileLoop(num){
    console.log("While loops");
    while(num<10){
        console.log(num);
        num++;
    }
    console.log('\n')
}

function doWhileLoop(num){
    console.log("Do While Loops")
    do {
        console.log(num)
        num++;
    }while(num<=10)

}

function forOf(){
    let arr=[10,20,5,6,40];
    for(let num of arr){
        console.log(num)
    }

}

function forIn(){
    let fruits=["Apple","Banana","Mango","Pineapple"]
    for(let fruit in fruits){
        console.log(fruit+" "+fruits[fruit]);
    }
}

forLoop(5);
whileLoop(1);
doWhileLoop(1);
forOf()
forIn()
