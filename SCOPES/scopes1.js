// function fun(){
//     console...log(1);
//     return 0;
// }

// //If JS would have been a purely interpreted language,then hello would have been printed.
// console.log("Hello");
// console....log("world");
// console.log("bye");


var teacher = "Sanket";
function fun() {
    var teacher = "Pulkit";
    console.log(teacher);
}
function gun() {
    var student = "Sarthak";
    console.log(student);
}

fun();//Pulkit
gun();//Sarthak
console.log(teacher);//Sanket
