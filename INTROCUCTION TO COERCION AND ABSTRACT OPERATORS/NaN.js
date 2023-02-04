console.log(Number("123"));
console.log(Number("abcd"));
console.log(Number("0xa"));

let x = NaN;

console.log(x == NaN);

console.log(isNaN(x));

console.log(isNaN("sanket")); // isNaN converts the incoming input to a number-->Performs ToNumber conversion

console.log(Number.isNaN("sanket"));
console.log(Number.isNaN(x));

if(typeof(x) == 'number' && x !== x ) {
    console.log(true);
}

console.log(x !== x); // ! == is there any problem with this expression to check nan value
// Why is this true?Because x is NaN and NaN is not equal to NaN    