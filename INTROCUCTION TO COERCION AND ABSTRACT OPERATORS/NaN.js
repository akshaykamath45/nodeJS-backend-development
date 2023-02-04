console.log(Number("123"));//123
console.log(Number("abcd"));//NaN
console.log(Number("0xa"));//10

let x = NaN;

console.log(x == NaN);//false

console.log(isNaN(x));//true

console.log(isNaN("sanket")); // isNaN converts the incoming input to a number-->Performs ToNumber conversion

console.log(Number.isNaN("sanket"));//false
console.log(Number.isNaN(x));//true

if(typeof(x) == 'number' && x !== x ) {
    console.log(true);//true
}

console.log(x !== x); // ! == is there any problem with this expression to check nan value --> true
// Why is this true?Because x is NaN and NaN is not equal to NaN    