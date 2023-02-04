//Lexical Scoping
var teacher = "Sanket"; //teacher-->global scope-->sanket
function ask(question) { //ask-->global scope
	console.log(teacher, question); //sanket why
}

function fun() { //fun-->global scope
	var teacher = "Pulkit"; //teacher-->fun scope-->pulkit
	ask("why?");
}
fun();
// var fun;
// function fun() {
//     return 'fun2';
// }

// console.log(fun);