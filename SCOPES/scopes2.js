var teacher = "Sanket";
function fun() {
    var teacher = "Pulkit";//Function scoped
    content = "JS";//Autoglobally scoped
    console.log(teacher);
    console.log(content);
}
function gun() {
    var student = "Sarthak";//Function scoped
    console.log(student);
}
// console.log(content);
fun();
gun();
console.log(teacher);
console.log(content);