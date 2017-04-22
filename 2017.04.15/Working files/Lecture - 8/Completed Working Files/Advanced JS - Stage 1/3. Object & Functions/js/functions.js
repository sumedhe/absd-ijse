function myFn1(){
    console.log("This is function declaration");
}

var myFn2 = function(){
    console.log("This is function expression");
}

var myFn3 = new Function("test", "console.log('This is function constructor' + test)");

myFn3("Suranga");
