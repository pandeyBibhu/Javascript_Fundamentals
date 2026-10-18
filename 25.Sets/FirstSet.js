//IN Javascript set store unique element i.e each value can occure only once in set.
//The value can be any type primitive and Objects
//We declare the set following below Synatx



//create set passing array objects

const letters=new Set(['a','b','c','d']);
console.log(letters);
letters.forEach((value)=>{
    console.log(value)
})
console.log("================================================================")
//Adding Element to Set

const sets=new Set();
sets.add('a');
sets.add('b');
sets.add('c');
sets.add('d');
sets.add('b');
console.log("===============================FOr of....Loop===============================")
//using for of....loop

for(const values of sets){
    console.log(values)
}

console.log("============================For each loop(Arrow function)====================================")
sets.forEach((values)=>{
    console.log(values);
})
console.log("=============================forEach loops===================================")

sets.forEach(function(values){
    console.log(values);
})
console.log("============================Using Keys,values====================================")
for(let [Keys,value] of sets.values()){
    console.log(Keys+" "+value);

}
console.log("======================using entries()===============================")
for(let entry of sets.entries()){
    console.log(entry);
}

console.log('===================Convert set into Arrays==================')
let arr=[...sets];
arr.forEach(function(values){
    console.log(values)
})