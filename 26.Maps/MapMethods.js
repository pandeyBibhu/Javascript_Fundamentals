console.log("\n*******************Map Methods()*******************\n")
//new Map() : used to create a Empty map
let emp=new Map();

//Set() used to Add/Modify the items from map

emp.set("Bibhu","Bangalore")
emp.set("Bikash","Bomby")
emp.set("Bishnu","Bhubhneshwar")
emp.set("Bishal","Baroda")
emp.set("Binit","Bhilai")

console.log(emp)

emp.set("Binit","Bhagalpur")
console.log(emp)

//get() used to retrive the Items values from Map

console.log(emp.get("Bibhu"));
//Size() used to get the Size of Map

console.log(emp.size);
//delete() used to delete the element 

emp.delete("Binit");
console.log(emp);

//clear() used to clear all the elements from Map
emp.clear();
console.log(emp.size)
emp.set("Bibhu","Bangalore")
emp.set("Bikash","Bomby")
emp.set("Bishnu","Bhubhneshwar")
emp.set("Bishal","Baroda")
emp.set("Binit","Bhilai")
console.log(emp)

//has() used to return true if keys exist in Map


console.log(emp.has("Bibhu"));

//forEach() used to invoke callback for each[key value] in pair

emp.forEach(function(values,key){
    console.log("keys :"+key+' '+"values :"+values)
})

//entries() used to return the Iterator object in [key,value] of Map

for(let name of emp.entries()){
    console.log(name)
}

//Keys() used to return iterator object with Keys() in Map

for(let keys of emp.keys()){
    console.log(keys)
}
console.log("\n")
//values() used to return the iterator object with values in the Map
for(let value of emp.values()){
    console.log(value)
}

console.log("\n------------------Object as Key--------------------\n")
let obj={"name":"Apple"}
let obj2={"name":"Banana"}
let obj3={"name":"Mango"}

const fruits=new Map();
fruits.set(obj, "Red Apple");
fruits.set(obj2, "Yellow Banana");
fruits.set(obj3, "Sweet Mango");

fruits.forEach((value,key)=>{
console.log(key," ",value);
})

fruits.forEach((value, key) => {
    console.log(key, "=>", value);
});
