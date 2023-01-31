console.log(10-2)//8
console.log(10-null);//10-0-->10
console.log(10-undefined);//10-NaN-->NaN
console.log(10-true);//10-1-->9
//Happening Internally using Abstract Operations.

console.log(1-"453");//1-453 -->-452
console.log(1-"56tyughi98");//1 -NaN-->Since Not Possible

//Assignment
console.log(1-"0xa")//0xa in Hexadecimal is equivalent to 10,so 10 will be converted to number(using ToNumber),1-10-->-9
