// let obj={};
// console.log(obj.toString()); —>type is string.

// let obj={x : 10}
// console.log(obj.valueOf())-->Default Value of Object type is Object

// let obj = {
//     toString() {
//        //by default gives [object Object] 
//     //   return "Let's Learn Javascript";///We can Override
//       return "98";
//     }
//     valueOf(){
//       //by default it returns the Same Object
//       //It can be overrideded as well
//     }
//   };
//   console.log(obj.toString());

let obj={}
console.log(10-obj);//obj.valueOf-->same object,obj.toString-->object Object,Understand the algorithm behind it.

let obj1={x:9,y:8};
console.log(100-obj1);//NaN

let obj2={x:7,valueOf(){return 99}};
console.log(100 -obj2);//1

let obj3={x:7,toString(){return "88"}};
console.log(90-obj3);//2

let obj4={x:7,toString(){return{}}};
console.log(100-obj4);//Type Error-->Cannot Convert object to primitive value.
