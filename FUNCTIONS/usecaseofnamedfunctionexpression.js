//Readibilty of the code increases
function fun(fn) {
    console.log("Welcome to fun");
    fn();
}

fun(function () {
    console.log("Wow so much fun");
    console.trace();//Call stack of the function call-->Not an error but a function,-->Stores logs.
});


// for recursive cases named function expression are also helpful-->Refer arguments.callee