//This will execute only set method we use in most of the times
const sets=new Set();

console.log('=========================Adding elements using Add()=======================')

sets.add('a');
sets.add('b');
sets.add('c');
sets.add('d');
sets.add('e');

sets.forEach((value)=>{
    console.log(value);
})

console.log("--------------------Size() of set------------------------")
console.log(sets.size)

console.log('-------------------for of()-----------------------------')
for(let value of sets){
    console.log(value)
}

console.log('-------------------has()-----------------------------')
console.log(sets.has("a"))
console.log(sets.has('f'));
console.log('--------------------Keys()------------------')
for(let keys of sets.keys()){
    console.log(keys)
}
console.log('-----------values()--------------')
for(let values of sets.values()){
    console.log(values);
}

console.log('------------------entries()--------------------')
//entries methode return an iterator[value,value] pair form of an object
//The entries() method is supposed to return a [key,value] pair from an object.
//A Set has no keys, so the entries() method returns [value,value].
//This makes Sets compatible with Map

for(let values of sets.entries()){
console.log(values)
}