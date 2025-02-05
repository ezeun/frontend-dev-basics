/* Lexical Scope */
var f1 = function(){
    var s = "hello world";

    var inner = function(){
        console.log(s);
    }

    inner();
}

f1();

/* Closure is a function that has access to the outer function's scope in which it was created even after the outer function has finished executing. */
var f1 = function(){
    var s = "hello world";

    var inner = function(){
        console.log(s);
    }

    return inner;
}

var closure = f1();
closure();

function Component(){
    var s = userState("10");

    s = 20;
}