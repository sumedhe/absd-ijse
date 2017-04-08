var output = $("#output");

var myObj = {}
var myStr = "Oshan"
var myBool = true
var booleanObj = new Boolean(false);

if(myObj){
    output.append("In conditions objects return true</br>")
}

if(myStr){
    output.append("In conditions Non empty strings return true</br>")
}

if(true){
    output.append("In conditions true return true</br>")
}

if(booleanObj){
    output.append("In conditions boolean objects return true </br>")
}

if(null){
    output.append("In conditions null return false</br>")
}

if(undefined){
    output.append("In conditions Undefined return false</br>")
}

if(false){
    output.append("In conditions false return false</br>")
}
