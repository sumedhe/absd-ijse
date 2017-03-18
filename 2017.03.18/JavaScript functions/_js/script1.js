// function myFunction(){
//     alert("Test");
// }
// myFunction();


// function add(a,b){
//     return a + b;
// }
// alert(add(7, 5));


// Anonymous functions
// var x = function(a, b){
//     return a + b;
// };
// alert(x(3, 6));


// Undefined parameters
// function myFunction(name){
//     alert(name);
// }
// myFunction();


// Optional parameters
 function myFunction(name){
     alert((typeof(name) == "undefined")? "IJSE" : name);
 }
 myFunction("null");