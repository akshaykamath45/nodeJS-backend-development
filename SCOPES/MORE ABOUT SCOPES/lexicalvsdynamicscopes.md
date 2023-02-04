Lexical Scoping-->Before the execution phase,scopes are determined.Lexical Refers to the Compiler,It's in Compilation Phase.By default JS supports Lexical Scoping.

Dynamic Scoping-->The Scope Resolution is done during Runtime.Example-->Bash Script

//Lexical Scoping
`var teacher = "Sanket"; //teacher-->global scope-->sanket
function ask(question) { //ask-->global scope
	console.log(teacher, question); //sanket why
}

function fun() { //fun-->global scope
	var teacher = "Pulkit"; //teacher-->fun scope-->pulkit
	ask("why?");
}
fun();`