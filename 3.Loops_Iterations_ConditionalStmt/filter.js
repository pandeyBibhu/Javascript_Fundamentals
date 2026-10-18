function filterLoops(){
    let array=[2,1,3,5,4,6,8];
    let newArray=array.filter((n)=>n%2==0)
    console.log(newArray);
}
filterLoops()