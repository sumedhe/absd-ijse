
myFn1();    //Correct
function myFn1() {
//    "use strict"
    x = 10;
    console.log("x : " + x);
    console.log("This is function declaration");
}
myFn1();    //Correct

//myFn2();    //Inorrect
var myFn2 = function() {
    console.log("This is function expression");
};
myFn2();    //Correct



var myF = new Function("name", "console.log('This is function declaration')");
myF("os");