function myFunction(){
    var name = "IJSE";
    
    console.log("My Function owner : " + this);
    printName();
    
    function printName(){
        console.log("Print name of the owner : " + this);
        console.log(name);
    }
}

//myFunction();

var myObj = {
    name : "IJSE",
    printName : function(){
        console.log(this.name);
        console.log(this);
    }
}

//myObj.printName();

function myFun(){
    console.log(Array.isArray(arguments));
    console.log(arguments[0]);
}

//myFun("IJSE");

//var myObj = {
//    name : "IJSE",
//    print Name : function();
//}

var myObj = {
    name : "IJSE",
    age : 10,
    print : function(){
        console.log(name);
    }
}

for(var property in myObj){
    console.log(property);
}

