console.log('*****************WeakSet*********************')

const weakset=new WeakSet();

const obj={'name':'Bibhu','age':26,'location':'Bangalore'}

weakset.add(obj);
let answer = weakset.has(obj);
console.log(answer)


