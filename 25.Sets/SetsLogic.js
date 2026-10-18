console.log("====================SetsLogics===============")

console.log('----------Union() methods-----------')
//Union methode return union of two sets.
//it return the new set in which elements are  in both sets

let seta=new Set();
seta.add('a');
seta.add('b');
seta.add('c');
seta.add('d');

 console.log(seta);

let setb=new Set();
setb.add('e');
setb.add('a');
setb.add('b');
setb.add('c');
setb.add('f');

console.log(setb);

const result =seta.union(setb);
console.log(result)

console.log('-------------intersection()----------------')
//The intersection() method returns the intersection of two sets.
//The intersection() method returns a new set containing the elements which are in this set and in the argument set:

const intersec=seta.intersection(setb);
console.log(intersec);

console.log('\n------------------difference()---------------------\n');
//the difference of two sets returns the difference of two sets
//The difference() method returns a new set containing elements which are in this set but not in the argument set:

const diffrenc=seta.difference(setb);
console.log(diffrenc)


console.log('-------------------symmetricDifference()--------------------')
//this methode return the symmetricDifference betwen two sets.
//It will return new set containing elements which are this set or in argument set but not both

const symDiff=seta.symmetricDifference(setb);
console.log(symDiff)

console.log('-----------isSubsetOf()----------------');
//it will return true if all the element from this set are also in argument set
const issubset=seta.isSubsetOf(setb);
console.log(issubset)

console.log('--------------isSupersetOf()------------------------')
const issupersetof=setb.isSupersetOf(seta);
console.log(issupersetof)

console.log('--------------------isDisjointFrom()--------------------')
console.log(seta.isDisjointFrom(setb));

