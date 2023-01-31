console.log(null == undefined);//True

console.log(12 == "12");//True

console.log(false == "0");//True
// if  x→Boolean→ToNumber→false→0
// x=0,y=”0”,x==y
// y→ToNumber→0
// 0==0—>true

console.log(null == "false");//False
//y-->Boolean-->ToNumber-->0
//null == 0
//False-->Satisfying the last conditon.

console.log("NaN"==NaN);
let obj={x:10,valueOf(){return 100;}}
console.log(99 == obj);
console.log(100 == obj);