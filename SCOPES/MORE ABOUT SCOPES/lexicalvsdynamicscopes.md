Lexical Scoping-->Before the execution phase,scopes are determined.Lexical Refers to the Compiler,It's in Compilation Phase.By default JS supports Lexical Scoping.

Dynamic Scoping-->The Scope Resolution is done during Runtime.Example-->Bash Script

//Lexical Scoping<br>
var teacher = "Sanket"; //teacher-->global scope-->sanket <br>
function ask(question) { //ask-->global scope<br>
	console.log(teacher, question); //sanket why <br>
}<br>
<br>
function fun() { //fun-->global scope <br>
	var teacher = "Pulkit"; //teacher-->fun scope-->pulkit <br>
	ask("why?"); <br>
}<br>
fun();<br>
