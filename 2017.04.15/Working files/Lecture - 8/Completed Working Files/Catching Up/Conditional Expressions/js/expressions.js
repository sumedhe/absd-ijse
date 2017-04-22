var output = $("#output");

if ({}){
    output.append("Objects return true in conditions");
}

var bool = new Boolean(false);

if (bool){
    output.append("Primitive wrappers return true in conditions because they are objects.<br>");
}

if ("Some String"){
    output.append("Non-Empty Strings return true in conditions.<br>");
}

if (12){
    output.append("Non-Zero Numbers return true in conditions.<br>");
}

if (true){
    output.append("true literal returns true in conditions.<br>");
}

output.append("<hr>");

if (!undefined){
    output.append("undefined returns false in conditions.<br>");
}

if (!null){
    output.append("null returns false in conditions.<br>");
}

if (!""){
    output.append("Empty Strings return false in conditions.<br>");
}

if (!0){
    output.append("Zero Numbers return false in conditions.<br>");
}

if (!false){
    output.append("false literal returns false in conditions.<br>");
}


