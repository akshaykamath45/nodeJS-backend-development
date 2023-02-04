console.log(NaN===NaN);//False
console.log(0===-0);//True

let obj1={x:10};
let obj2={y:10};
let obj3={z:10};

console.log(obj1===obj2);//False
console.log(obj1===obj3);//False
console.log(obj1===obj1);//True
console.log({x : 10}==={x:10});//False-->Created at 2 different locations in the memory.