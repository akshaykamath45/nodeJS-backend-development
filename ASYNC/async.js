// Javascript is Synchronus in Nature-->It is executes code line by line If we execute valid ECMA Script Code /Native.
// JS is single threaded/single process.

// We will never stop a synchronous part of code

//Runtime
function timeConsumingByLoop() {
    console.log("loop starts");
    for(let i = 0; i < 1000000000; i++) {
        // some task
    }
    console.log("loop ends");
} 
function timeConsumingByRuntimeFeature0() {
    console.log("Starting timer");
    setTimeout(function exec() {//send it to the runtime
        console.log("Completed the timer0");
        for(let i = 0; i < 1000000000; i++) {
            // some task
        }
    }, 5000); // 5 sec timer
}
function timeConsumingByRuntimeFeature1() {
    console.log("Starting timer");
    setTimeout(function exec() {//send it to the runtime
        console.log("Completed the timer1");
        // while(true) {}
    }, 0); // 0 ms timer
}
function timeConsumingByRuntimeFeature2() {
    console.log("Starting timer");
    setTimeout(function exec() {//send it to the runtime
        console.log("Completed the timer2");
    }, 200); // 200 ms timer
}
console.log("Hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("By");

//When the timer will end,all the processes inside setTimeOut function  will wait in the EVENT QUEUE untill synchronous/valid code is executed,since Javascript does not recognises the seTimeOut Function,It is recognised by the runtime.

//hi
//loop starts
//loop ends
//starting timer
//starting timer
//starting timer
//loop starts
//loop ends
//by

//completed the timer1
//completed the timer2
//completed the timer0
