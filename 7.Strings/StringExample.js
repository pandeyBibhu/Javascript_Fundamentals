//Declare string
 let name="Bibhu Pandey";

 let name1='Bibhu';

 //Quotes inside quote

 let name3="Bibhu Pandey is from 'India'";

 let name4='Bibhu Pandey is from "India"';

 console.log(name);
 console.log(name1);
 console.log(name3);
 console.log(name4);

 //Template String

 let str=`My Name is "Bibhu Pandey" and I am from 'India'`;
 console.log(str);

 let str1="Bibhu";
 let str2="Kumar";

 let str3=`My Name is ${str1} ${str2}`;
 console.log(str3);

 //length of string
 let str4="Bibhu Pandey";
 console.log(str4.length);

 //Create string using new keyword
 let str5=new String("Bibhu Kumar Pandey");
 console.log(str5);

 let str6="ram";
 let str7=new String("ram");

 console.log(str6==str7); //true
 console.log(str6===str7); //false