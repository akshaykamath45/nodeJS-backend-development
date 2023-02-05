function fun() {
    for(let i = 0; i < 10; i++) {
        // do something
    }
    console.log(i);
}

function process(x, y) {
    if(x > y) {
        // var temp = x;
        let temp = x;
        x = y;
        y = temp;
    }
    return y - x;
}

fun();//

//When variables are declared using let,only post declaration is allowed,also reassignments are allowed.
//If we try to access the variable before declaration,we will get ReferenceError.It is known as Temporal Dead Zone.