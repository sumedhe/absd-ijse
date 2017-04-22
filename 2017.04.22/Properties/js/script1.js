var myObj = {
    name : "IJSE",
    age : 10,
    print : function(){
        console.log(name);
    }
}


var ownProperties = Object.keys(myObj);
console.log(ownProperties.toString());

