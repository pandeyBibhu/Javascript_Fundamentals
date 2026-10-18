function checkif(){
console.log("This is if statement function");
let age=60;
if(age>=18){
    console.log("eligible to vote")
}
}

function checkIfElse(){
    console.log('this is If else statement');
    let age=16;
    if(age<18){
        console.log("Not elegible to vote")
    }else{
        console.log("Elegible to vote");
    }
}

function checkIfElseIf(marks){
console.log("This is ifElseIf Statement");

if(marks<=60){
    console.log("Grade C ")
}else if(marks>=75 && marks<=80){
    console.log('Grade B')
}else if(marks>80){
    console.log("Grade A")
}else{
    console.log("You are Failed in the exam!!!!Please try again next year")
}
}

function checkSwitch(day){
    switch(day){
        case 1: console.log("Monday")
        break;
        case 2:console.log("Tuesday")
        break;
        case 3:console.log("Wednesday")
        break;
        case 4:console.log("Thrusday")
        break;
        case 5: console.log("Friday")
        break;
        case 6:console.log("Saturday")
        break;
        case 7:console.log("Sunday")
        break;
        default:
            console.log("Invalid Input")
    }
}

function checkTernary(num){
    let result=num>10?"Correct Input":"invalid Input"
    console.log(result)
}

checkif();
checkIfElse();
checkIfElseIf(90);
checkSwitch(9)
checkTernary(10)

